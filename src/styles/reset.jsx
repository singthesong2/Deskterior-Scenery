import { css } from "@emotion/react";

export const reset = css`
  /* 박스 크기 통일 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 부스, 덜컹방지 */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    overflow-y: scroll;
  }

  /* 리스트 점박이 제거 */
  ul,
  ol,
  li {
    list-style: none;
  }

  /* 링크 파랑색이랑 밑줄 삭제 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* 이미지 깨짐 방지 */
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* 브라우저 스타일 초기화 */
  input,
  button,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    border: none;
    background: none;
  }

  /* 버튼 호버,비 활성화 */
  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }
  /* 임의 배경색 지워야함 */
  body {
    background-color: #f8f7f2;
  }
`;
