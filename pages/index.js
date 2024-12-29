import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { FiSun, FiMoon } from 'react-icons/fi';
import {useTheme} from 'next-themes'


export default function Home() {
  const {theme, setTheme} = useTheme()

  return (
    <div>
      <Head>
        <title>Ajeet Singh | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/happy.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}
