import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/layout/Footer/Footer.jsx";
import Header from "@/layout/Header/Header.jsx";
import { useLanguageUrlSync } from "@/shared/hooks/useLanguageUrlSync.js";

function RootLayout() {
  useLanguageUrlSync();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default RootLayout;
