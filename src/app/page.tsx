'use client';

import React, { useState } from "react";
import MainFlow from "@/components/features/MainFlow";
import Sidebar from "@/components/features/Sidebar";

import styles from "./page.module.css";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.page}>
      <header>
        <p id="header-logo">Avantos</p>
        <p id="slogan">AI that empowers your team to deliver services that boost loyalty and revenue</p>
        <button id="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </header>
      <main>  
        <MainFlow />
        <Sidebar isOpen={isSidebarOpen} />
      </main>
    </div>
  );
}
