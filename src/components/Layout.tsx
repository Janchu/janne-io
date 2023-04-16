import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <main className="container mx-auto px-4">
        <Header />
        {children}
      </main>
    </>
  );
}
