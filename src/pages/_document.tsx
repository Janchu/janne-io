import { Analytics } from '@vercel/analytics/react';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
