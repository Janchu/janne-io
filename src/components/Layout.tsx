import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <main className="container mx-auto px-4">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
