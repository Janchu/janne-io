export default function Card({ children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none p-8 pb-12 rounded-lg">
      {children}
    </div>
  );
}
