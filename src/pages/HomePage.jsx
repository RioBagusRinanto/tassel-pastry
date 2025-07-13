import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import HeroSectionComponent from "../components/HeroSectionComponent";
import OurStoryComponent from "../components/OurStoryComponent";
import FeaturedProductComponent from "../components/FeaturedProductComponent";
import FooterComponent from "../components/FooterComponent";

function HomePage() {
  return (
    <>
      <HeaderComponent />
      <HeroSectionComponent />
      <OurStoryComponent />
      <FeaturedProductComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
