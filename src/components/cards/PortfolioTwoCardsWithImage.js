import React from "react";
import tw from "twin.macro";
import "./newsletter.css";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import pranav from "../components_images/pranav_final.webp";
import hemang from "../features/gridimages/Hemang Sinha - Photograph - Hemang Sinha.JPG";
import vaibhav from "../components_images/vaibhav.jpg";
import tanisha from "../features/gridimages2/Tanisha\ Dhawan.JPG";
import aishwarya from "../features/gridimages/AishwaryaChand_Editorial-Coordinator - Aishwarya Chand.jpeg";
import manas from "../features/gridimages/Manas Das_Graphic Design Coordinator - Manas Das.jpg";
import kashish from "../features/gridimages/KashishGarg_EditorialCoordinator - Kashish Garg.jpeg";
import shalini from "../features/gridimages/Shalini Agrawal_ Graphic Designing Coordinator - Shalini Agrawal.jpg";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)((props) => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`,
]);
const CardColumn = tw(
  Column
)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`mt-4 xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`,
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardCompany = tw.div`text-primary-500 font-bold text-lg`;
const CardType = tw.div`font-semibold text-sm text-gray-600`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-center sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4 mr-4 last:mr-0`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-6`;

export default ({
  subheading = "",
  headingHtmlComponent = (
    <>
      Read our Latest <span style={{color:"rgb(66,153,225)"}}>Edition</span>
    </>
  ),

  description1 = `IEEE Delhi Section Student Activities Committee Newsletter 2021, gives a glimpse of  the accomplishments made by its student members throughout the year.
  `,
  description2 = `
  With an aim to inspire and motivate student branches ,  It highlights and showcases the eccentric activities, the IEEE Delhi Section and its student branches organized in the past year.
    
  `,
  description3 = `  Apart from the accolades it also features the success stories  of  IEEE members who have been awarded for their spirits of volunteering and determination towards IEEE.
  `,
  description4 = `  
  With this newsletter, we intend to provide readers with an inside look at the IEEE Delhi Section and its student branches, as well as an opportunity to reminisce.
  `,
  linkText = "",
  cardLinkText = "Read Case Study",
  textOnLeft = false,
}) => {
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn textOnLeft={textOnLeft}>
            <HeadingInfoContainer>
              <Subheading>{subheading}</Subheading>
              <HeadingTitle>{headingHtmlComponent}</HeadingTitle>
              <HeadingDescription>{description1}</HeadingDescription>
              <HeadingDescription>{description2}</HeadingDescription>
              <HeadingDescription>{description3}</HeadingDescription>
              <HeadingDescription>{description4}</HeadingDescription>
            </HeadingInfoContainer>
          </HeadingColumn>
          <div style={{ margin: "auto" }}>
            <iframe
              className="iframedi"
              src="https://www.yumpu.com/xx/embed/view/UqnaOB1NwtWQAKzf"
              frameborder="0"
              allowfullscreen="true"
              allowtransparency="true"
            ></iframe>
          </div>
        </ThreeColumn>
      </Content>
      <div className="sc_txt" style={{color:"rgb(66,153,225)"}}>Special Credits</div>
      
      <div>
        

        <div className="card_sac_ssn">
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
                <img src={vaibhav} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Vaibhav Srivastava
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={tanisha} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Tanisha Dhawan
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={pranav} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Pranav Chauhan
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={aishwarya} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Aishwarya Chand
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={hemang} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Hemang Sinha
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={manas} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Manas Das
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={kashish} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Kashish Garg
              </div>
            </div>
            
          </div>
          <div class="slide-card" style={{ height: "240px" }}>
            <div class="slide-card-content">
              <div class="image">
              <img src={shalini} />
              </div>

              <div class="media-icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </div>

              <div
                class="name"
                style={{ color: "white", fontSize: "18px", marginTop: "10px" }}
              >
                Shalini Agarwal
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

{
  /* <div className="sc_h">Special Credits:</div>
          <div className="sc_b">Vaibhav Srivastava, Tanisha Dhawan, Pranav Chauhan, Aishwarya Chand</div>
          <div className="sc_b">Hemang Sinha, Manas Das, Kashish Garg, Shalini Agarwal</div> */
}
