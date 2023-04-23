import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main className="container mx-auto px-4 min-h-screen flex flex-col justify-between gap-8">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
}
