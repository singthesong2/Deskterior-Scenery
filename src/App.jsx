import { useEffect, useState } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { reset } from "./styles/reset";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import CartPage from "./pages/Cart/CartPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { getMe } from "./api/authApi";
import LightingPage from "./pages/Lighting/LightingPage";
import HomePage from "./pages/Home/HomePage";

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
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <div>{isLoggedIn ? "로그인 상태" : "로그아웃 상태"}</div>

      {isLoggedIn && userInfo && <p>{userInfo.name}님</p>}

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
    </ThemeProvider>
  );
}

export default App;
