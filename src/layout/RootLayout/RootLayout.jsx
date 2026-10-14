import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/layout/Footer/Footer.jsx";
import Header from "@/layout/Header/Header.jsx";
import { useCanonicalUrl } from "@/shared/hooks/useCanonicalUrl.js";
import { useLanguageUrlSync } from "@/shared/hooks/useLanguageUrlSync.js";
import { useVisitRegistration } from "@/shared/hooks/useVisitRegistration.js";

function RootLayout() {
  useLanguageUrlSync();
  useCanonicalUrl();
  useVisitRegistration();

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
