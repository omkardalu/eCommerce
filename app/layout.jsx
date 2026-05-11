import "./globals.css";
import '@fontsource-variable/geist';
import Home from "@/features/Home";

export const metadata = {
  title: "eCommercebyme",
  description: "The Ecommerce website",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col]">
        <div className="flex min-h-screen min-w-full flex-col">
        <Home>{children}</Home>
        </div>
      </body>
    </html>
  );
}
