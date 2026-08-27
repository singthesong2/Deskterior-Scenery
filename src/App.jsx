import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import CartPage from "./pages/Cart/CartPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";

function App() {
  return (
    <>
      <LoginForm />
      <SignupForm />
      <CartPage />
      <ProductDetailPage />
    </>
  );
}

export default App;
