const products = [
  {
    id: 1,
    name: "미니멀 버섯 무선 램프",
    categoryId: "lighting",
    price: 38000,
    imageUrl: "<https://i.ibb.co/Nnxv35Z9/whaudwprj1.webp>",
    description: "곡선 쉐이드와 3단 터치 디밍이 돋보이는 모던 무선 무드등",
  },
  {
    id: 2,
    name: "슬림 모니터 라이트바",
    categoryId: "lighting",
    price: 42000,
    imageUrl: "<https://i.ibb.co/TnszRpc/whaud2wprj.webp>",
    description: "눈부심 없이 데스크 작업 영역만 미니멀하게 밝히는 스크린바",
  },
  {
    id: 3,
    name: "매트 메탈 데스크 스탠드",
    categoryId: "lighting",
    price: 54000,
    imageUrl: "<https://i.ibb.co/8nZPXKDW/whaudwprj4.webp>",
    description:
      "직선적인 알루미늄 바디와 정교한 각도 조절이 가능한 작업용 조명",
  },
  {
    id: 4,
    name: "앰비언트 선셋 램프",
    categoryId: "lighting",
    price: 26000,
    imageUrl: "<https://i.ibb.co/0p6ZRKzV/whaudwprj3.webp>",
    description: "벽면에 은은한 빛을 투사해 공간의 무드를 바꾸는 감성 램프",
  },
  {
    id: 5,
    name: "마그네틱 미니 센서등",
    categoryId: "lighting",
    price: 19000,
    imageUrl: "<https://i.ibb.co/d4d2nxGh/whaudwprj.webp>",
    description: "선반이나 프레임에 자석으로 부착해 사용하는 충전식 큐브 조명",
  },
  {
    id: 6,
    name: "글라스 글로브 테이블 램프",
    categoryId: "lighting",
    price: 46000,
    imageUrl:
      "<https://i.ibb.co/mr4BfqwL/e965dcb2-980a-4ee3-9470-8b9fd4b57198.webp>",
    description: "미니멀한 구형 유리 쉐이드로 부드러운 빛을 내는 오브제 조명",
  },
  {
    id: 7,
    name: "클리어 아크릴 3단 서랍장",
    categoryId: "organization",
    price: 28000,
    imageUrl:
      "<https://i.ibb.co/w8M6hk0/Chat-GPT-Image-2026-8-26-03-26-55.webp>",
    description: "군더더기 없는 투명한 구조로 데스크 소품을 정돈하는 미니 서랍",
  },
  {
    id: 8,
    name: "알루미늄 슬림 파일 랙",
    categoryId: "organization",
    price: 22000,
    imageUrl: "<https://i.ibb.co/4Zt0P0jJ/file-lag.webp>",
    description: "태블릿과 서류, 노트를 간결하게 수직 수납하는 메탈 스탠드",
  },
  {
    id: 9,
    name: "모듈 데스크 트레이",
    categoryId: "organization",
    price: 15000,
    imageUrl:
      "<https://i.ibb.co/whfP5jRv/Chat-GPT-Image-2026-8-26-03-25-27.webp>",
    description:
      "분리와 적층이 자유로워 필기도구를 단정하게 나누는 모던 트레이",
  },
  {
    id: 10,
    name: "스틸 케이블 매니지먼트 박스",
    categoryId: "organization",
    price: 24000,
    imageUrl: "<https://i.ibb.co/VWv7T0Fc/cable.webp>",
    description: "엉킨 전선과 멀티탭을 깔끔하게 숨겨주는 미니멀 스틸 수납함",
  },
  {
    id: 11,
    name: "폴더블 펠트 데스크 바스켓",
    categoryId: "organization",
    price: 16000,
    imageUrl:
      "<https://i.ibb.co/mF5j4B6P/Chat-GPT-Image-2026-8-26-03-27-12.webp>",
    description:
      "부드러운 질감으로 일상 소품을 간편하게 담아두는 패브릭 바구니",
  },
  {
    id: 12,
    name: "미니멀 데스크 페그보드",
    categoryId: "organization",
    price: 36000,
    imageUrl:
      "<https://i.ibb.co/TDYWK1WH/Chat-GPT-Image-2026-8-26-03-24-13.webp>",
    description:
      "자주 쓰는 도구를 자석과 홀더로 공중에 띄워 정리하는 미니 타공판",
  },
  {
    id: 13,
    name: "3-in-1 폴더블 무선 충전기",
    categoryId: "digital-electronics",
    price: 48000,
    imageUrl: "<https://i.ibb.co/b5GN3N48/Charger.webp>",
    description:
      "폰, 워치, 이어폰을 슬림하게 거치하며 동시 충전하는 무선 스테이션",
  },
  {
    id: 14,
    name: "미니멀 블루투스 기계식 키보드",
    categoryId: "digital-electronics",
    price: 79000,
    imageUrl: "<https://i.ibb.co/9mQNqKtd/image.webp>",
    description: "절제된 키캡 컬러와 정갈한 타건감을 갖춘 텐키리스 무선 키보드",
  },
  {
    id: 15,
    name: "무소음 에르고노믹 무선 마우스",
    categoryId: "digital-electronics",
    price: 34000,
    imageUrl: "<https://i.ibb.co/c78MZwG/image.webp>",
    description: "손목 부담을 덜어주는 슬림한 쉘과 조용한 클릭감의 마우스",
  },
  {
    id: 16,
    name: "알루미늄 큐브 블루투스 스피커",
    categoryId: "digital-electronics",
    price: 45000,
    imageUrl: "<https://i.ibb.co/gZKyKDhh/1.webp>",
    description:
      "미니멀 메탈 바디에서 나오는 깊은 사운드로 공간을 채우는 스피커",
  },
  {
    id: 17,
    name: "초슬림 마그네틱 보조배터리",
    categoryId: "digital-electronics",
    price: 32000,
    imageUrl: "<https://i.ibb.co/fzQMM1C2/image.webp>",
    description:
      "디바이스 후면에 밀착되는 군더더기 없는 맥세이프 일체형 배터리",
  },
  {
    id: 18,
    name: "로터리 다이얼 데스크 타이머",
    categoryId: "digital-electronics",
    price: 21000,
    imageUrl: "<https://i.ibb.co/rKvCnSwL/image.webp>",
    description:
      "직관적인 휠 다이얼로 작업과 집중 시간을 관리하는 미니멀 타이머",
  },
  {
    id: 19,
    name: "비건 레더 와이드 데스크 매트",
    categoryId: "desk-accessories",
    price: 24000,
    imageUrl: "<https://i.ibb.co/4Rhk90c0/wprj1.webp>",
    description:
      "매트한 가죽 질감으로 데스크 톤을 정돈하고 방수성을 갖춘 장패드",
  },
  {
    id: 20,
    name: "솔리드 알루미늄 노트북 스탠드",
    categoryId: "desk-accessories",
    price: 38000,
    imageUrl: "<https://i.ibb.co/NgHYqp3b/2.webp>",
    description: "미니멀한 알루미늄 판재로 시선 높이와 쿨링을 확보하는 거치대",
  },
  {
    id: 21,
    name: "월넛 우드 팜레스트",
    categoryId: "desk-accessories",
    price: 19000,
    imageUrl: "<https://i.ibb.co/s9cTWhhy/wprj3.webp>",
    description:
      "자연스러운 원목 질감으로 장시간 타이핑 시 손목을 받쳐주는 팜레스트",
  },
  {
    id: 22,
    name: "마그네틱 케이블 드롭 홀더",
    categoryId: "desk-accessories",
    price: 12000,
    imageUrl: "<https://i.ibb.co/gFJKygJm/wprj4.webp>",
    description:
      "케이블 단자가 흘러내리지 않도록 자석으로 책상에 고정하는 홀더",
  },
  {
    id: 23,
    name: "세라믹 인센스 트레이",
    categoryId: "desk-accessories",
    price: 23000,
    imageUrl: "<https://i.ibb.co/xSNMvzD7/wprj5.webp>",
    description: "정적인 도자기 오브제로 작업 전 기분 전환을 돕는 인센스 홀더",
  },
  {
    id: 24,
    name: "스테인리스 스틸 코스터 세트",
    categoryId: "desk-accessories",
    price: 14000,
    imageUrl: "<https://i.ibb.co/PGgvKWC4/wprj6.webp>",
    description: "차가운 금속 감성으로 컵 표면의 물기를 방지하는 모던 코스터",
  },
  {
    id: 25,
    name: "미니멀 그리드 하드커버 저널",
    categoryId: "objects-stationery",
    price: 14000,
    imageUrl:
      "<https://i.ibb.co/S4K96dNY/Chat-GPT-Image-2026-8-27-02-08-36.webp>",
    description:
      "깔끔한 격자 내지로 생각과 아이디어를 자유롭게 기록하는 양장 노트",
  },
  {
    id: 26,
    name: "매트 메탈 젤 잉크 펜",
    categoryId: "objects-stationery",
    price: 18000,
    imageUrl:
      "<https://i.ibb.co/VcgQMN59/Chat-GPT-Image-2026-8-27-02-10-39.webp>",
    description: "정밀 가공된 알루미늄 바디로 흔들림 없이 써지는 미니멀 볼펜",
  },
  {
    id: 27,
    name: "뉴트럴 인덱스 스티키 탭",
    categoryId: "objects-stationery",
    price: 6500,
    imageUrl:
      "<https://i.ibb.co/KdWFmnb/Chat-GPT-Image-2026-8-27-02-18-27.webp>",
    description: "차분한 뉴트럴 톤으로 서류와 책의 위치를 정돈하는 점착 플래그",
  },
  {
    id: 28,
    name: "알루미늄 커팅 룰러 (30cm)",
    categoryId: "objects-stationery",
    price: 9500,
    imageUrl:
      "<https://i.ibb.co/ksrnZ5Tt/Chat-GPT-Image-2026-8-27-02-09-45.webp>",
    description:
      "군더더기 없는 레이저 각인 눈금과 미끄럼 방지 패드가 들어간 금속 자",
  },
  {
    id: 29,
    name: "원터치 미니 테이프 디스펜서",
    categoryId: "objects-stationery",
    price: 13000,
    imageUrl:
      "<https://i.ibb.co/bRXF6NNq/Chat-GPT-Image-2026-8-27-02-13-25.webp>",
    description: "묵직한 베이스로 테이프를 한 손으로 깔끔하게 끊어 쓰는 절단기",
  },
  {
    id: 30,
    name: "아크릴 펜 레스트 & 페이퍼웨이트",
    categoryId: "objects-stationery",
    price: 11000,
    imageUrl:
      "<https://i.ibb.co/8DX18QbM/Chat-GPT-Image-2026-8-27-02-17-16.webp>",
    description: "펜을 거치하고 흩어지는 메모를 눌러두는 투명 아크릴 오브제",
  },
];

export default products;
