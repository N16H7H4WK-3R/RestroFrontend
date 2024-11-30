import React from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Headers from "./Header";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Headers />
      <Hero />
      <Specials />
      <Footer />
    </div>
  );
};

export default Home;
