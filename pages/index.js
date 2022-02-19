import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Homebanner from "../components/Homebanner"
import Whyus from "../components/Whyus"
import Howitworks from "../components/Howitworks"
import Aboutus from "../components/Aboutus"
import Customerreviews from "../components/Customerreviews"
import Customerbanner from "../components/Customerbanner"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Homebanner />
      <Whyus />
      <Howitworks />
      <Aboutus />
      <Customerreviews />
      <Customerbanner />
      <Footer />
    </>
  );
}
