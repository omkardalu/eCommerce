import { CartProvider } from "@/app/providers/CartProvider";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";
import { ToastProvider } from "@/app/providers/ToastProvider";
import Toast from "./components/Toast";
const Home = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      <CartProvider>
        <ToastProvider>
          <main className="grow">{children}</main>
          <Toast />
        </ToastProvider>
      </CartProvider>
      <HomeFooter />
    </div>
  );
};

export default Home;
