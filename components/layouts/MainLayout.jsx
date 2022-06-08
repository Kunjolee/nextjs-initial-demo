import Head from "next/head";

import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>      
      <Head>
        <title>Home - Kunjo lee</title>
        <meta name="description" content="Contact page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="keywords" content="kunjo, lee, curso, next.js"/>
      </Head>

      <Navbar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  );
}


// Layout: componente que reutilizara toda la estructura que se repite en las paginas