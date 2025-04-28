import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <p id="header-logo">Avantos</p>
      </header>
      <main>
        <p>AI that empowers your team to deliver services that boost loyalty and revenue</p>
      </main>
      <footer>
      </footer>
    </div>
  );
}
