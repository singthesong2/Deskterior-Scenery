import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SuccessToast from "../../components/common/SuccessToast";
import FailToast from "../../components/common/FailToast";
import { getProducts } from "../../api/productsApi";
import ProductCard from "../product/ProductCard";
import useCartStore from "../../store/cartStore";
import {
  RecommendContainer,
  SectionTitle,
  GridContainer,
} from "../../styles/CartStyles/RecommendItems.styles";

const RecommendItems = () => {
  const [recommendList, setRecommendList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Zustand 장바구니 스토어에서 addToCart 함수 꺼내오기
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchRecommend = async () => {
      try {
        setIsLoading(true);
        // 1. 서버에서 전체 상품 리스트 가져오기
        const data = await getProducts();
        const products = Array.isArray(data) ? data : data.products || [];

        // 2. 품절 상품 제외하기 (soldOut 값이 false인 것만 남김)
        const availableProducts = products.filter((item) => !item.soldOut);

        // 3. 랜덤으로 배열 섞기 (셔플 알고리즘)
        const shuffled = [...availableProducts].sort(() => 0.5 - Math.random());

        // 4. 앞에서부터 딱 3개만 잘라서 State에 저장
        setRecommendList(shuffled.slice(0, 3));
      } catch (error) {
        console.error("추천 상품을 불러오는 데 실패했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommend();
  }, []);

  // 🛒 장바구니 담기 버튼 클릭 시 실행되는 함수
  const handleAddToCart = async (product) => {
    try {
      // API 명세서 구조에 맞게 데이터 가공 (id -> productId 등)
      const cartProduct = {
        ...product,
        productId: product.id,
        imageUrl: product.images?.[0] || product.imageUrl, // 이미지가 배열일 경우 첫 번째 이미지 사용
      };

      // 스토어의 addToCart 호출 (기본 수량 1개)
      await addToCart(cartProduct, 1);
      toast(<SuccessToast message="상품이 장바구니에 담겼습니다." />);
    } catch (error) {
      toast(<FailToast message="장바구니 담기에 실패했습니다." />);
    }
  };

  // 로딩 중이거나 추천할 상품이 0개라면 화면에 그리지 않음
  if (isLoading || recommendList.length === 0) return null;

  return (
    <RecommendContainer>
      <SectionTitle>Explore Recommend Items</SectionTitle>

      <GridContainer>
        {recommendList.map((product) => (
          <ProductCard
            key={product.id || product.productId}
            product={product}
            showCategory={false} // 장바구니 시안에는 카테고리 이름이 없으므로 숨김
            // 🌟 장바구니 버튼 클릭 이벤트 연결
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </GridContainer>
    </RecommendContainer>
  );
};

export default RecommendItems;
