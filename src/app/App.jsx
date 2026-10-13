import ThemeProvider from "@/app/providers/ThemeProvider.jsx";
import Footer from "@/layout/Footer/Footer.jsx";
import Header from "@/layout/Header/Header.jsx";
import HomePage from "@/pages/HomePage.jsx";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
