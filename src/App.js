import Hero from "../src/image/Hero.png";
import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ColThreeSection } from "./Component/ColThreeSection";
import DisplayUsers from "./Component/DisplayUsers";
import {
  Data1,
  People,
  People2,
  Project,
  Reason,
  Team,
  Review,
  Partners,
  Clients,
  ClientReview,
} from "./Component/Data";
import { HeroComponent } from "./Component/HeroComponent";
import { ColTwoSection } from "./Component/ColTwoSection";

import Project8 from "../src/image/Project8.png";
import { TimeLineComponent } from "./Component/TimeLineComponent";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App ">
      <HeroComponent
        H4="SOLUTION FOR YOUR BUSINESS"
        H2="Providing Technology For"
        H2Span="Smart Solution"
        P="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere sagittis. Quisque ornare eleifend arcu et condimentum. Aliquam consectetur blandit quam, porttitor malesuada lorem semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lacus non ligula aliquam,"
        IMG={Hero}
        IMGALT="T4TREV"
      />
      <ColThreeSection
        Data={Data1}
        H5="Our Services"
        H2="Explore "
        SPAN="The Services"
        COLSIZE="col-lg-4 g-4 "
      />

      <ColTwoSection
        H4="ABOUT COMPANY"
        H2="We've Been Thriving For "
        H2Span="45 Years."
        P="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere sagittis. Quisque ornare eleifend arcu et condimentum. Aliquam consectetur blandit quam, porttitor malesuada lorem semper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet lacus non ligula aliquam,"
        IMG={Project8}
        IMGALT="T4TREV"
      ></ColTwoSection>

      <ColThreeSection
        Data={Project}
        H5="Our Projects"
        H2="Explore "
        SPAN="The Projects"
        COLSIZE="col-lg-4 g-4 "
      />
      <ColThreeSection
        Data={Reason}
        H5="Why Us"
        H2="Explore "
        SPAN="The Reasons"
        BgStyle="bgbg"
        COLSIZE="col-lg-4 g-4 "
      />

      <ColThreeSection
        Data={Team}
        H5=" Our Team"
        H2="Explore "
        SPAN="Our Expert"
        COLSIZE="col-lg-6 g-4 "
      />

      <ColThreeSection
        Data={Review}
        H5=" Our Clients Review"
        H2="Explore "
        SPAN="What Happy Clients Says About Us?"
        BgStyle="bgbg"
        COLSIZE="col-lg-4 g-4  "
      />

      <ColThreeSection
        Data={Partners}
        H5=" Our Partner "
        H2="Explore "
        SPAN="What Happy Partner  Join Them?"
        COLSIZE="col-lg-3 g-4  "
      />

      <TimeLineComponent></TimeLineComponent>

      <ColThreeSection
        Data={Clients}
        H5=" Our Clients "
        H2="Explore "
        SPAN="Our Happy Clients  Join Them?"
        BgStyle="bgbg"
        COLSIZE="col-lg-4 g-4  "
      />

      <ColThreeSection
        Data={ClientReview}
        H5="Client Review"
        H2="Explore "
        SPAN="The Our Client Reviews"
        COLSIZE="col-lg-6 g-4 "
      />
    </div>
  );
}

export default App;
