import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/nav";
import { Advantages, Faq, Freetrial, Herosection, Showcase, Sponsors } from "@/components/landingPage/LandingPage";
import Head from "next/head";
import Image from "next/image";




const Home = () => {
  return (
    <div className=" py-10 ">
      <Head>
        <title>ClearLink Video Conferencing</title>
      </Head>
      <div className="px-24 ">
        <Navbar />
      </div>
      <main className={`min-h-screen space-y-28 `}>
        <Herosection />
        <Sponsors />
        <Advantages />
        <Showcase />
        <Faq />
        <Freetrial />
      </main>
      <Footer />

    </div>
  );
}

export default Home
