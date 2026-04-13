import "./globals.css";

export const metadata = {
  title: "eCommercebyme",
  description: "The Ecommerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="flex min-h-screen flex-col">
          <header className="p-4 bg-(--primary) text-(--surface)">
            <h1>eCommerece</h1>
          </header>
          <main className="grow">
            {children}
          </main>
          <footer className="p-4 bg-(--surface)"><div>&copy; All Rights Reserved {new Date().getFullYear()}</div></footer>
        </div>
      </body>
    </html>
  );
}
