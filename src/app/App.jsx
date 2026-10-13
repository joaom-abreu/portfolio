import { RouterProvider } from "react-router-dom";
import ThemeProvider from "@/app/providers/ThemeProvider.jsx";
import { router } from "@/app/router.jsx";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
