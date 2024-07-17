import styles from "./page.module.scss";
import Navbar from "@/components/navbar/navbar";
import MainLayout from "@/components/main-layout/main-layout";

export default function Home() {
  return (
    <div className={styles.main} id="main">
      <div id="container" style={{height: "100%"}}>
        <Navbar />
        <MainLayout />
      </div>
    </div>
  );
}
