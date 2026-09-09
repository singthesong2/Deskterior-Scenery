import { clientApi } from "./clientApi";
import { getCategoryById } from "../data/categories";

// 서버 응답 → 상세페이지 컴포넌트가 쓰는 모양으로 변환
function toProduct(raw) {
  return {
    id: raw.id,
    name: raw.name,
    price: raw.price,
    discountPrice: raw.discountPrice,
    description: raw.description,

    category: getCategoryById(raw.categoryId)?.name ?? raw.categoryId,

    images: [raw.imageUrl, ...(raw.thumbnails ?? [])],

    detailSections: (raw.detailImages ?? []).map((url, index) => ({
      id: index + 1,
      image: url,
      title: "",
      body: "",
    })),
    soldOut: (raw.stock ?? 0) <= 0,
    rating: raw.rating ?? 0,
    reviewCount: raw.reviewCount ?? 0,
  };
}

export function postProducts(data) {
  return clientApi("/products", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function getProducts() {
  return clientApi("/products");
}

// 상품 상세 조회 — GET /products/{productId}
export async function getProduct(productId) {
  const res = await clientApi(`/products/${productId}`); // { success, data }
  return toProduct(res.data);
}
