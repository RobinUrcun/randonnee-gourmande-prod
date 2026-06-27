import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/guide.pdf"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}
