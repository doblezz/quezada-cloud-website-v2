import React from "react";
import PageHead from "@components/PageHead";
import header from '@assets/title/index.json'
// import { Helmet } from "react-helmet";
// import NavBar from "../components/navbar/NavBar";
// import SwiperNav from "../components/navbar/SwiperNav";
// import ChangeDivisas from "../components/divisas/ChangeDivisas";
// import CHome from "../components/content-home/CHome";
// import Loading from "../components/pageLoading/Loading";
import HeaderSlider from "@components/HeaderSlider";

const Home = () => {

  return (
    <>
    {/* Meta header */}
    <PageHead
      title={header.home.title}
      description={header.home.description}
    />

    <HeaderSlider/>


    </>
  );
};

export default Home;