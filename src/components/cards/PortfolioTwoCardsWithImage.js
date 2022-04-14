import React from "react";
import tw from "twin.macro";
import "./newsletter.css"
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div`xl:mr-12 xl:last:mr-0`;
const HeadingColumn = styled(Column)(props => [
  tw`w-full xl:w-5/12`,
  props.textOnLeft ? tw`xl:order-first` : tw`xl:order-last xl:ml-12 xl:mr-0`
]);
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-3/12 mt-16 xl:mt-0 xl:last:ml-auto`;

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
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
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
      Read our Latest <span tw="text-primary-500">Edition</span>
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
  textOnLeft = false
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
              <div className="special_cr">
          <div className="sc_h">Special Credits:</div>
          <div className="sc_b">Vaibhav Srivastava, Tanisha Dhawan, Pranav Chauhan, Aishwarya Chand</div>
          <div className="sc_b">Hemang Sinha, Manas Das, Kashish Garg, Shalini Agarwal</div>
        </div>
            </HeadingInfoContainer>
          </HeadingColumn>
        <div style={{margin:"auto"}}>
        <iframe className="iframedi" src="https://www.yumpu.com/en/embed/view/XbUn9dujCqyo3SIc" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>
        
   
       

        </div>
        
        </ThreeColumn>
        
      </Content>
    </Container>
  );
};
