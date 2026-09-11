import { clientApi } from "./clientApi";
import { getCategoryById } from "../data/categories";

// 임시 : 서버 stock:0 반영 전까지 강제 품절 처리
const FORCE_SOLD_OUT_IDS = new Set([14]); // Minimal Desk Pegboard
export const isForceSoldOut = (id) => FORCE_SOLD_OUT_IDS.has(id);

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

    // detailImages: 문자열 배열 → { imageUrl, title, description } 객체 배열로 변경됨
    detailSections: (raw.detailImages ?? []).map((item, index) => ({
      id: index + 1,
      image: item.imageUrl ?? item, // 옛 문자열 응답도 방어적으로 지원
      title: item.title ?? "",
      body: item.description ?? "",
    })),
    soldOut: FORCE_SOLD_OUT_IDS.has(raw.id) || (raw.stock ?? 0) <= 0,
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

// 상품 목록 조회 — GET /products?category=&page=&limit=
export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();
  const res = await clientApi(`/products${query ? `?${query}` : ""}`); // { success, data: { products, pagination } }
  return res.data;
}

// 상품 상세 조회 — GET /products/{productId}
export async function getProduct(productId) {
  const res = await clientApi(`/products/${productId}`); // { success, data }
  return toProduct(res.data);
}
