import "../styles/global.css";
import { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
