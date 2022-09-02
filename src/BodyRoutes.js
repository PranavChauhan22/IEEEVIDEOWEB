import React from "react";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
import Dash from "../src/components/features/Dash";
import Reportpanel from "../src/components/features/Reportpanel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FullWidthWithImage from "components/hero/FullWidthWithImage";
import ThreeColSimple from "components/features/ThreeColSimple";
import ThreeColWithSideImage from "components/features/SlidingGallery";
import TwoColSingleFeatureWithStats2 from "components/features/TwoColSingleFeatureWithStats2";
import ThreeColSlider from "components/cards/ThreeColSlider";
import TwoColWithSteps from "components/features/TwoColWithSteps";
import TwoColWithButton from "components/features/TwoColWithButton";
import TwoColumnWithImageAndRating from "components/testimonials/TwoColumnWithImageAndRating";
import TwoColContactUsWithIllustration from "components/forms/TwoColContactUsWithIllustration";
import SimpleFiveColumn from "components/footers/SimpleFiveColumn";
import Login from "components/Submit/Login";
import Dashboard from "components/Submit/Dashboard";
import Saccards from "components/cards/Saccards";
import Awards from "components/features/Awards";
import Editions from "components/features/Editions";
import TwoColumnWithPrimaryBackground from "components/hero/TwoColumnWithPrimaryBackground";
import TwoColumnPrimaryBackground from "components/faqs/TwoColumnPrimaryBackground";
import SimpleContactUs from "components/forms/SimpleContactUs";
import TwoColumnWithImageAndProfilePictureReview from "components/testimonials/TwoColumnWithImageAndProfilePictureReview";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";
import Menufinal from "components/hero/Menufinal";
import Rout from "Rout";
import Events from "components/events/Events";
import TwoColWithButtonver2 from "components/features/TwoColWithButtonver2";
import { TabViewDemo } from "components/features/Tabs";
function BodyRoutes() {
  return (
    <div>
      <FullWidthWithImage />

      <TwoColSingleFeatureWithStats2 />
      <ThreeColWithSideImage />
      <TwoColWithButton/>
      <Awards />
      <Events />
      <TwoColumnWithImageAndRating />
      <ThreeColSlider />
      <TwoColContactUsWithIllustration />
      <SimpleContactUs />
      <TwoColumnPrimaryBackground />
      <SimpleFiveColumn />
    </div>
  );
}

export default BodyRoutes;
