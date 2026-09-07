import { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { Routes, Route } from "react-router";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import CartPage from "./pages/Cart/CartPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getMe } from "./api/authApi";
import LightingPage from "./pages/Lighting/LightingPage";
import HomePage from "./pages/Home/HomePage";
import Toast from "./components/common/Toast";
import CommonLayout from "./pages/CommonLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoggedIn(false);
      setUserInfo(null);
      return;
    }

    async function checkAuth() {
      try {
        const result = await getMe();

        setIsLoggedIn(true);
        setUserInfo(result.userInfo);

        localStorage.setItem("userInfo", JSON.stringify(result.userInfo));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("userInfo");

        setIsLoggedIn(false);
        setUserInfo(null);
      }
    }

    checkAuth();
  }, []);

  return (
    <>
      <Global styles={reset} />
      {/*<div>{isLoggedIn ? "로그인 상태" : "로그아웃 상태"}</div>*/}
      {/* 나중에 로그인 로그아웃 상태 체크 코드 삭제 X */}

      {/*{isLoggedIn && userInfo && <p>{userInfo.name}님</p>}*/}

      <Toast />
      <Routes>
        <Route element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={
              <LoginForm
                setIsLoggedIn={setIsLoggedIn}
                setUserInfo={setUserInfo}
              />
            }
          />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/lightingpage" element={<LightingPage />} />
          <Route
            path="/detailpage"
            element={
              <ProductDetailPage
                isLoggedIn={isLoggedIn}
                currentUserId={userInfo?.id ?? null}
                currentUserName={userInfo?.name ?? ""}
              />
            }
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {/* 페이지 이동 및 Outlet 적용 코드, 삭제 X */}

      <LoginForm setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />
      <SignupForm />
      <HomePage />

      <CartPage />
      <ProductDetailPage
        isLoggedIn={isLoggedIn}
        currentUserId={userInfo?.id ?? null}
        currentUserName={userInfo?.name ?? ""}
      />
      <NotFoundPage />
      <LightingPage />
    </>
  );
}

export default App;
