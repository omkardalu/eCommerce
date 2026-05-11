import { CartProvider } from "@/app/providers/CartProvider";
import HomeFooter from "./components/HomeFooter";
import HomeHeader from "./components/HomeHeader";
const Home = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      <CartProvider>
        <main className="grow">{children}</main>
      </CartProvider>
      <HomeFooter />
    </div>
  );
};

export default Home;
