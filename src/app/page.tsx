'use client';

import React from "react";
import MainFlow from "@/components/features/MainFlow";
import Sidebar from "@/components/features/Sidebar";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <p id="header-logo">Avantos</p>
        <p id="slogan">AI that empowers your team to deliver services that boost loyalty and revenue</p>
      </header>
      <main>
        
        {/* React Flow component moved to MainFlow */}

        <MainFlow />
        <Sidebar />
        

      </main>
      {/* <footer>
      </footer> */}
    </div>
  );
}
