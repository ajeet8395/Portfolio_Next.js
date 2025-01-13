import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5500);
  }, []);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <div className="dark:bg-zinc-900">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Navbar />
              <Component {...pageProps} />
            </>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
