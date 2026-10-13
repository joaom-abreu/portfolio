import ThemeProvider from "@/app/providers/ThemeProvider.jsx";
import ThemeToggle from "@/shared/ui/ThemeToggle/ThemeToggle.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <ThemeProvider>
      <main>
        <div className={styles.toolbar}>
          <ThemeToggle />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
