import { lazy, Suspense, useEffect, useState } from "react";
import { Global } from "@emotion/react";
import { reset } from "./styles/reset";
import { Routes, Route } from "react-router";
//import SignupForm from "./pages/SignupForm";
//import LoginForm from "./pages/LoginForm";
//import CartPage from "./pages/Cart/CartPage";
//import ProductDetailPage from "./pages/Product/ProductDetailPage";
//import NotFoundPage from "./pages/NotFoundPage";
import { getMe } from "./api/authApi";
//import CategoryPage from "./pages/Category/CategoryPage";
import categories from "./data/categories";
//import HomePage from "./pages/Home/HomePage";
import Toast from "./components/common/Toast";
import CommonLayout from "./pages/CommonLayout";
import Loading from "./components/common/Loading";
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const LoginForm = lazy(() => import("./pages/LoginForm"));
const SignupForm = lazy(() => import("./pages/SignupForm"));
const CategoryPage = lazy(() => import("./pages/Category/CategoryPage"));
const ProductDetailPage = lazy(
  () => import("./pages/Product/ProductDetailPage"),
);
const CartPage = lazy(() => import("./pages/Cart/CartPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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

      {/*<Loading />*/}

      <Toast />
      <Suspense fallback={<Loading />}>
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
            {categories.map((category) => (
              <Route
                key={category.id}
                path={category.path}
                element={
                  <CategoryPage key={category.id} categoryId={category.id} />
                }
              />
            ))}
            <Route
              path="/products/:id"
              element={
                <ProductDetailPage
                  isLoggedIn={isLoggedIn}
                  currentUserId={userInfo?.id ?? null}
                  currentUserName={userInfo?.name ?? ""}
                />
              }
            />
            <Route path="/cartpage" element={<CartPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* 페이지 이동 및 Outlet 적용 코드, 삭제 X */}

      {/* 라우팅으로 각 페이지가 렌더되므로 겹침 렌더 비활성화 
      <LoginForm setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo} />
      <SignupForm />
      <ProductDetailPage
        isLoggedIn={isLoggedIn}
        currentUserId={userInfo?.id ?? null}
        currentUserName={userInfo?.name ?? ""}
      />
      <NotFoundPage autoRedirect={false} />
      */}
    </>
  );
}

export default App;
