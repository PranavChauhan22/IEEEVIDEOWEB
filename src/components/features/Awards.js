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
import im2 from "../components_images/shatakshi.jpeg"
import im3 from "../components_images/vps.jpeg"
import im4 from "../components_images/ritwik.jpeg"
import akshat from "../components_images/akshat.jpeg"
import vandana from "../components_images/vandana.jpg"
import piyush from "../components_images/Piyush.jpg"
import Aryan from "../components_images/Aryan.jpeg"
import archit from "../features/gridimages/Archit goswami.jpeg"
import sb1 from "../components_images/sb1.webp"
import sb2 from "../components_images/sb2.webp"
import sb3 from "../components_images/sb3.webp"
import garima from "../features/gridimages/Garima Patel.jpeg"
import ashwin from "../features/gridimages/J Ashwin Nair.jpeg"
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
  tw`w-full h-56 sm:h-96 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
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
      imageSrc: garima,
      title: "IEEE Region-10 SAC Outstanding Volunteer Award",
      description: "Every individual has a creative side that can be expressed in various ways, such as original and innovative thinking, artistic pursuits, and problem-solving. I joined IEEE during my second year of college, with the aim of making a difference in team management, network building, and professional upskilling. Volunteering as the Chairperson at IEEE SB MUJ and the Subsection Student Representative at IEEE Delhi SSN helped me enhance my technical, managerial, and soft skills. Serving as the Vice-Chair of the IEEE Delhi YP Team and being a part of the India Council YP Team expanded my network of professionals and leaders. IEEE recognized my efforts with awards and support for multiple trips such as the IEEE Region-10 SYWL Congress 2022 which was recently held in Jeju, South Korea. I urge future leaders to join this dynamic community for comprehensive development, meeting bright minds, and creating everlasting memories.",
      locationText: "Ms. Garima Patel",
      locationText1: "IEEE MUJ",
      pricingText: "USD 50/Day",
      rating: 4.9,
      
 

    },
    {
      imageSrc: ashwin,
      title: "IEEE Region-10 SAC Outstanding Volunteer Award",
      description: "In 2019, I joined IEEE as Treasurer of my SB and later became a Mentor, volunteering for global events like IEEE Xtreme and PES Day. In 2020, I served as Social Media Coordinator for the IEEE Delhi Section Student Network, contributing to all areas of volunteering. During the pandemic, I organized the virtual AISYWLC 2020, leading and managing volunteers under SBAP from across the nation while handling diverse managerial and admin tasks. My contributions led me to join several committees, including the India Council YP and Educational Activities Committees, and become a Mentor for IEEE Delhi Section Student Network, Delhi Section Life Members, and Young Professionals Affinity Groups in 2021.",
      locationText: "Mr J. Ashwin Nair",
      locationText1: "IEEE MSIT",
      pricingText: "USD 50/Day",
      rating: 4.9,
      
 

    },
    {
      imageSrc: piyush,
      title: "IEEE India Council Award 2021 for Outstanding Student Volunteer",
      description: "Mr. Piyush Kumar Sahoo on receiving the IEEE India Council Award 2021 for Outstanding Student Volunteer.This distinguished award honours their spirit of volunteerism, as well as their exceptional leadership abilities and commitment to deal with challenging situations.",
      locationText: "Mr. Piyush Kumar Sahoo",
      locationText1: "IEEE DTU",
      pricingText: "USD 19/Day",
      rating: "5.0"
  
    },
    {
      imageSrc: im2,
      title: "Shri Pralhad P. Chhabria Award 2022",
      description: "I joined as an IEEE Student Member 5 years ago without much knowledge of its benefits. Although I expected to receive technical updates, conference discounts, and resource access, IEEE offered much more. Through volunteering roles, I gained valuable skills and met amazing people who are now close friends. Overall, my journey has been incredibly rewarding, leading me from being a novice to the recipient of the prestigious Richard E. Merwin Student Scholarship and the Pralhad P. Chhabria Award.",
      locationText: "Ms. Shatakshi Singh",
      locationText1: "IEEE MUST",
      pricingText: "USD 50/Day",
      rating: 4.9,
      
 

    },
    {
      imageSrc: im4,
      title: "Richard E. Merwin Scholarship for Spring 2022 ",
      description: `As a recent graduate in Computer Engineering from Delhi Technological University, being chosen for this award is extremely meaningful to me. My role as the Chairperson of the IEEE DTU Student Branch has equipped me with the necessary skills to succeed in my upcoming technology career. I appreciate the opportunities that this scholarship will present as I embark on my journey as an SDE in the AWS Cloudwatch team at Amazon Ireland. I am grateful for this transformative opportunity.`,
      locationText: "Mr. Ritwik Ranjan",
      locationText1: "IEEE DTU",
      pricingText: "USD 39/Day",
      rating: "4.8",
    },
        
    {
      imageSrc: vandana,
      title: "IEEE India Council Award 2021 for Outstanding WIE Volunteer",
      description: "In my second year, I became a Student Member of IEEE and later established the IEEE WIE Affinity Group at my Student Branch. Currently, I hold the position of Chairperson of the Chandigarh University Student Branch and it has been an incredibly enriching experience, offering me technical and non-technical opportunities that have helped me become a well-rounded individual. Furthermore, my contributions as a WIE Coordinator for the IEEE Delhi SSN Team and to gender-diverse panels have aided in my personal development.",
      locationText: "Ms. Vandana Chauhan",
      pricingText: "USD 50/Day",
      rating: 4.9,
    },
  {
    imageSrc: Aryan,
    title: "Richard E. Merwin Student Scholarship for Spring 2022",
    description: "Since joining IEEE in 2020, my journey has been fruitful and filled with exciting experiences, including participating in national and international events and volunteering at Delhi Section and India Council. These opportunities have helped me expand my network and develop my overall personality. My mentors have provided excellent guidance, further enriching my journey. Three principles that have been essential to me are starting early, seizing opportunities, and being willing to take risks. I have created wonderful memories that I will cherish forever.",
    locationText: "Mr. Aryan",
    locationText1: "IEEE NCU",
    pricingText: "USD 19/Day",
    rating: "5.0"

  },

    {
      imageSrc: akshat,
      title: "IEEE India Council Award 2021 for Outstanding Student Volunteer",
      description: "I am honoured to receive the IEEE India Council Outstanding Student Volunteer Award and want to express my gratitude to Prof. Prerna Gaur, my mentors, and my team. My time with IEEE has been one of the highlights of my college experience. Through volunteering and participating in events, I've gained invaluable knowledge and skills.",
      locationText: "Mr. Akshat Aggarwal",
      locationText1: "IEEE DTU",
      pricingText: "USD 19/Day",
      rating: "5.0"

    },{
    imageSrc: im2,
    title: "Shri Pralhad P. Chhabria Award 2022",
    description: "Miss Shatakshi Singh of IEEE MUST conferred with the Shri Pralhad P. Chhabria Award for the Best Outgoing Student. This award is a clear reflection of her outstanding academic achievements and the sincere effort that she has demonstrated throughout her academic career.",
    locationText: "Ms. Shatakshi Singh",
    locationText1: "IEEE MUST",
    pricingText: "USD 50/Day",
    rating: 4.9,
    


  },
  {
    imageSrc: im4,
    title: "Richard E. Merwin Scholarship for Spring 2022 ",
    description: `Mr. Ritwik Ranjan from IEEE DTU conferred with the coveted Richard E. Merwin Scholarship for Spring 2022 by the IEEE Computer Society.
    The award is given in recognition of his exemplary leadership skills, active involvement in student activities and excellent academic achievements. He will also be serving as the IEEE Computer Society Student Ambassador for the upcoming session.`,
    locationText: "Mr. Ritwik Ranjan",
    locationText1: "IEEE DTU",
    pricingText: "USD 39/Day",
    rating: "4.8",
  },
      
  {
    imageSrc: archit,
    title: "IEEE India Council Award 2021 for Outstanding Young Professional Volunteer",
    description: "Mr. Archit Goswami, IEEE Delhi Section SAC Member, has been given the IEEE India Council Award 2021 for Outstanding Young Professional Volunteer. With this prestigious honour, the IEEE India Council recognises his devotion and hard work, as well as his efforts to continue working in the IEEE community.",
    locationText: "Mr. Archit Goswami",
    pricingText: "USD 50/Day",
    rating: 4.9,
  },
{
  imageSrc: im3,
  title: "Larry K. Wilson Regional Student Volunteer Award",
  description: "Mr. Virendra Pratap Singh Rathore of IEEE NCU awarded with the Larry K. Wilson Regional Student Volunteer Award. His unparalleled contribution to IEEE is greatly admired and he demonstrated a pattern of unwavering dedication to his Student Branch.",
  locationText: "Mr. Virendra Pratap Singh Rathore",
  locationText1: "IEEE NCU",
  pricingText: "USD 19/Day",
  rating: "5.0"

},
  {
    imageSrc: ashwin,
    title: "IEEE India Council Award 2021 for Outstanding Student Volunteer",
    description: "Mr. J Ashwin Nair on receiving the IEEE India Council Award 2021 for Outstanding Student Volunteer.This distinguished award honours their spirit of volunteerism, as well as their exceptional leadership abilities and commitment to deal with challenging situations.",
    locationText: "Mr. J Ashwin Nair",
    locationText1: "IEEE MSIT",
    pricingText: "USD 19/Day",
    rating: "5.0"

  },

  {
    imageSrc: sb1,
    title: "IEEE SPAx Funding for DELCON 2022",
    description: "IEEE Delhi Section congratulates IEEE NSUT Student Branch for being conferred with the IEEE SPAx Funding for DELCON 2022.",
    locationText: "IEEE NSUT SB",
    pricingText: "USD 50/Day",
    rating: 4.9,
  },
  {
    imageSrc: sb2,
    title: "IEEE India Council Award 2021 for Outstanding Student Branch",
    description: "IEEE Delhi Section congratulates the IEEE Jamia Hamdard Student Branch on winning the IEEE India Council Award 2021 for Outstanding Student Branch.",
    locationText: "IEEE Jamia Hamdard SB",
    pricingText: "USD 50/Day",
    rating: 4.9,
  },
  {
    imageSrc: sb3,
    title: "IEEE Regional Exemplary Student Branch Award 2021",
    description: "IEEE Delhi Section congratulates IEEE The NorthCap University AND IEEE Dr. Akhilesh Das Gupta Institute of Technology & Management for winning the IEEE Regional Exemplary Student Branch Award 2021.",
    locationText: "IEEE The NorthCap University AND IEEE Dr. Akhilesh Das Gupta Institute of Technology & Management",
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
              <CardImage imageSrc={card.imageSrc}/>
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
