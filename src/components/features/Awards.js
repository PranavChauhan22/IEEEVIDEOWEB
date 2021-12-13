import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import "../features/stylee.css"
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import im1 from "../components_images/ritvik.jpeg"
import im2 from "../components_images/shatakshi.jpeg"
import im3 from "../components_images/vps.jpeg"
import im4 from "../components_images/ritwik.jpeg"
import im5 from "../components_images/palak.jpeg"
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: im1,
      title: "IEEE Region-10 Young Professionals REVOL 2021",
      description: `Mr. Ritvik Bansal from IEEE Delhi Section was awarded the IEEE Region-10 YP REVOL 2021 for his extraordinary accomplishment, commitment, and dedication towards society being an IEEE member. The REVOL program was introduced to bring a revolution by recognizing vibrant volunteers across all the sections in Region-10.`,
      locationText: "Mr. Ritvik Bansal  -  IEEE Delhi Section",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: im2,
      title: " Richard E. Merwin Scholarship - Spring 2021",
      description: "Ms Shatakshi Singh from IEEE MUST merit the transcendent accomplishment of Richard E. Merwin Scholarship - Spring 2021 for her unbounded contribution and volunteerism towards IEEE. The IEEE Computer Society offers Richard E. Merwin Scholarships to recognize and reward active student volunteer leaders in IEEE Student Branches or IEEE Computer Society Student Branch Chapters .",
      locationText: "Ms Shatakshi Singh - IEEE MUST",
      pricingText: "USD 50/Day",
      rating: 4.9,
      
 

    },
    {
      imageSrc: im3,
      title: "IEEE Region-10 WIE Outstanding Volunteer Award 2021",
      description: "Mr. Virendra Pratap Singh from IEEE NCU won the IEEE Region-10 WIE Outstanding Volunteer Award  for the year 2021 for his distinguished achievements. This award has been established to recognize individuals who have exhibited exemplary and substantive leadership of an extraordinary nature in implementing activities that support the visions of R-10 WIE.",
      locationText: "Mr. Virendra Pratap Singh - IEEE NCU",
      pricingText: "USD 19/Day",
      rating: "5.0"

    },
    {
      imageSrc: im4,
      title: "IEEE Region-10 Student Research Paper Contest 2021 - WIE Best Paper Award",
      description: "Mr. Ritwik Ranjan from IEEE Delhi Technological University, with the endorsement and constant support of Prof Jeebananda Panda, emerged as the winner of the Women in Engineering Best Paper Award in the IEEE R-10 Student Research Paper Contest 2021 for their research paper titled - Emoji Prediction using LSTM and Naive Bayes.The award is given in recognition of his exemplary involvement in written communication skills and reporting novel and original research results to the science & technology community.",
      locationText: "Mr. Ritwik Ranjan - IEEE DTU",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: im5,
      title: "IEEE Region-10 Student Research Paper Contest 2021 - WIE Best Paper Award",
      description: "Ms. Palak Yadav from IEEE Delhi Technological University, with the endorsement and constant support of Prof Jeebananda Panda, emerged as the winner of the Women in Engineering Best Paper Award in the IEEE R-10 Student Research Paper Contest 2021 for their research paper titled - Emoji Prediction using LSTM and Naive Bayes.The award is given in recognition of her exemplary involvement in written communication skills and reporting novel and original research results to the science & technology community.",
      locationText: "Ms. Palak Yadav - IEEE DTU",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
    
  ]

  return (
    <Container id="Awards">
      <Content>
        <HeadingWithControl>
          <Heading>Awards and Recognitions</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                 <h3 className="awardtxt">{card.locationText}</h3> 
                 
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
             
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
