import "./globals.css";
import "@fontsource-variable/geist";
import { CartProvider } from "@/app/providers/CartProvider";
import { ToastProvider } from "@/app/providers/ToastProvider";
import HomeHeader from "@/features/components/HomeHeader";
import Toast from "@/features/components/Toast";
import HomeFooter from "@/features/components/HomeFooter";
import { WishListProvider } from "./providers/WhishListProvider";

export const metadata = {
  title: "eCommercebyme",
  description: "The Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-screen  flex flex-col]">
        <div className="flex min-w-full flex-col">
          <CartProvider>
            <ToastProvider>
              <WishListProvider>
                <HomeHeader />
                <main className="grow">{children}</main>
                <HomeFooter />
                <Toast />
              </WishListProvider>
            </ToastProvider>
          </CartProvider>
        </div>
      </body>
    </html>
  );
}
