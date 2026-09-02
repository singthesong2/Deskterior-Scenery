const mainImage = "https://i.ibb.co/Nnxv35Z9/whaudwprj1.webp";

const images = [mainImage, null, null, null, null];

export const mockProduct = {
  id: 101,
  name: "Minimal Mushroom Wireless Lamp",
  price: 38000,
  description:
    "버섯을 닮은 무선 무드등입니다. 3단계 밝기 조절과 USB-C 충전을 지원해 침대 옆이나 책상 어디에나 두고 쓸 수 있어요.",
  category: "Lighting",
  images,
  detailSections: [
    {
      id: 1,
      image: images[0],
      title: "어디에나 어울리는 미니멀 디자인",
      body: "군더더기 없는 버섯 실루엣으로 책상, 침대 옆, 선반 어디에 둬도 공간에 자연스럽게 스며듭니다.",
    },
    {
      id: 2,
      image: images[0],
      title: "터치 한 번으로 3단계 밝기",
      body: "은은한 무드등부터 책 읽기 좋은 밝기까지, 상단을 가볍게 두드려 상황에 맞게 조절하세요.",
    },
    {
      id: 3,
      image: images[0],
      title: "선 없이, 최대 12시간",
      body: "USB-C로 완충하면 최저 밝기 기준 약 12시간 사용할 수 있어 잠들기 전까지 곁에 둘 수 있어요.",
    },
  ],

  reviews: [
    {
      id: 111,
      authorId: "user-01",
      author: "김**",
      rating: 5,
      date: "2026.08.20",
      content: "밝기 조절이 부드럽고 디자인이 예뻐요. 잘 쓰고 있습니다.",
    },
    {
      id: 222,
      authorId: "user-02",
      author: "이**",
      rating: 4,
      date: "2026.08.14",
      content:
        "생각보다 크기는 작지만 무드등으로는 딱 좋아요. 책상 옆에 두기가 좋은거같아요.",
    },
  ],
};
