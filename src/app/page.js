import Image from "next/image";
import { Inter } from "next/font/google";
import Test from "@/Components/Test";
// import styles from "./page.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Test />
    </>
  );
}
