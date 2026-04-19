import "./globals.css";
import '@fontsource-variable/geist';
export const metadata = {
  title: "eCommercebyme",
  description: "The Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col]">
        <div className="flex min-h-screen min-w-full flex-col">
          <header className="p-4 sticky top-0 left-0 right-0 z-50 shadow-2xl  bg-(--graphite) text-(--cloud)">
            <h1>eCommerece</h1>
          </header>
          <main className="">
            {children}
          </main>
          <footer className="p-4 bg-(--surface)"><div>&copy; All Rights Reserved {new Date().getFullYear()}</div></footer>
        </div>
      </body>
    </html>
  );
}
