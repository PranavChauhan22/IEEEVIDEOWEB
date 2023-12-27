import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import "../features/stylee.css"
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import img2 from "../components_images/about_header_wbg.jpg"
import img12 from "../features/secanime.gif"
import ReactPlayer from "react-player";
const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url(${img2});`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block mx-auto md:mx-0`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

export default ({
  subheading = "",
  heading = (
    <>
      Award <span tw="text-blue-500">Ceremony</span>
    </>
  ),
  description = `
  
  Demonstrating the true spirit of volunteerism, our fellow student members have yet again proven that continuous effort is the key to unlocking our true potential.
  
  With great fulfillment, the IEEE Delhi Section Student Activities Committee wishes to applaud the assiduous volunteers for their hard work, innovative initiatives and steadfast perseverance that has led us on the path of a triumphant year.
  
  We take immense pride in revealing the Host Student Branch for the IEEE Delhi Section Student Awards Ceremony 2023 - The NorthCap University, Gurugram.
  
  Watch till the end to mark your calendars, and join the congregation to honour our outstanding volunteers!`,
  primaryButtonText = "Learn More",
  primaryButtonUrl = "https://www.instagram.com/reel/CqdLEAztlcd/?utm_source=ig_web_copy_link",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = null,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects


  return (
    <Container id="about">
      <TwoColumn style={{display:"flex",flexDirection:"row-reverse", alignItems:"center",flexWrap:"wrap",justifyContent:"space-around"}}>
     
  

        {/* <ImageColumn css={imageContainerCss}> */}
      
        
      
      
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          
            <PrimaryButton as="a" href={primaryButtonUrl}>
              {primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
        <ReactPlayer
      url="https://youtu.be/Ygm0oAkuyyk"
      height="250px"
      width="320px"
      style={{marginTop:"20px",borderRadius:"5px", border:"8px solid #60a8ff"}}
      controls
    />
      </TwoColumn>
    </Container>
  );
};
