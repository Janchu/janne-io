import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
