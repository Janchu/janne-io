export default function Hightlight({ children }) {
  return (
    <span className="bg-linear-to-r from-pink-300 from-50% via-pink-100 via-95% to-pink-50 to-100%  dark:from-pink-700 dark:via-pink-800 px-1 -mx-1 rounded-ss-xl rounded-ee-xl rounded-se-md rounded-es-md font-semibold inline-block -skew-y-1">
      <span className="inline-block skew-y-1">{children}</span>
    </span>
  );
}
