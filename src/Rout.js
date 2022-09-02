import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import "../src/App.css"
import Dash from "../src/components/features/Dash"
import Reportpanel from "../src/components/features/Reportpanel"


import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";

import {HashRouter as Router, Switch, Route } from "react-router-dom";
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
import BodyRoutes from "BodyRoutes";
import ProfileThreeColGrid2 from "components/cards/ProfileThreeColGrid2";

function Rout() {
    return (
<Router>
      <div className="app">
        <div>

        <Switch>
          <Route exact path="/" component={BodyRoutes} />

  
          <Route
            exact
            path="/IEEEDELHISSN_TEAM"
            component={ProfileThreeColGrid}
            />
          <Route
            exact
            path="/IEEEDELHISSN_TEAM2"
            component={ProfileThreeColGrid2}
            />

          <Route exact path="/Editions"  component={Editions} />

          <Route exact path="/Report" component={Reportpanel} />
          <Route exact path="/Event" component={Dash} />
        </Switch>
            </div>
      </div>
      
    </Router>
    )
}

export default Rout
