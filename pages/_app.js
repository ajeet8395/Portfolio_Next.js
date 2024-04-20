import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="dark:bg-gray-800">
        <Navbar />
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default MyApp;
