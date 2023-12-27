import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import im1 from "../components_images/12.JPG"
import im2 from "../components_images/cyber1.png"
import im3 from "../components_images/extreminar1.jpg"
import im4 from "../components_images/ieeemeet.jpg"
import im5 from "../features/gridimages2/ac2022.png"
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
      id: 1,
      title: 'Student Branch Officers Meet',
      description:
        'IEEE Delhi Section hosted the Student Branch Officers Meet on 25th July 2021. Enthusiastic representatives from all the student branches under Delhi Section joined the meet and represented their Student Branch.',
      image:
        '1FTTkG5hJUiVjoKTZiOpojiScH9C6hYuB',
      
    },
    {
      id: 2,
      title: 'Cyber innovations in defense',
      description:
        'On the auspicious occasion of Independence Day, IEEE Delhi Section successfully conducted a webinar titled: Cyber Innovations in Defence, on 13th August, 2021. The event was graced by the insights and intellects of our eminent speakers- Maj. General Prabdeep Singh Behl and Col. Sanjeev Relia.',
      image:'1kJu4dtq5hg_473mICEYQ4xt7LLQv_U7X',
      
    },
    {
      id: 3,
      title: 'Robtronics',
      description:
        'IEEE Delhi Section successfully hosted Robotronics, an e-hands-on workshop on 7th August 2021. Inquisitive students from all across India joined us to take their first steps towards Robotics.',
      image:
        '1k4nfES7KwWrNCcHiKdqMplVuXdYfJM3R',
      
    },
      {
      id: 4,
      title: 'Xtreminar',
      description:
        'IEEE Delhi Section propitiously organised "Xtreminar" on 29th August, 2021; an interactive and insightful webinar to enlighten the young and aspiring competitive programmers about the IEEEXtreme 15.0 - the largest global programming competition of IEEE, scheduled to be held on 23rd October, 2021.',
      image:
        '1nR6pG656pA-TSb7uhcCpUDEwsE4ZWLy3',
      
    },
      {
      id: 5,
      title: 'Student Branch WIE AG Officers Meetup',
      description:
        'With the aim to empower and encourage women in the field of engineering, IEEE Delhi Section in coordination with WIE AG Delhi Section organized the Student Branch WIE AG Officers Meetup on 6th September, 2021.',
      image:
        '1PLJlBTz1NsYZOorwk1Mo1PIoPpZwIlBq',
      
    },
      {
      id: 6,
      title: 'IEEE Volunteer Tools: vTools and OU Analytics',
      description:
        'IEEE Region 10 Young Professionals UpSkill - Delhi Section 2021, with the indispensable support of the IEEE Delhi Section Student Activities Committee, hosted a workshop plus training session on using and implementing IEEE tools, titled "IEEE Volunteer Tools: vTools and OU Analytics" dated 26th September 2021.',
      image:
        '1nGb0GyHYYN7KmcqARKKWaj1oegx8pSlb',
      
    },
      {
      id: 7,
      title: 'Data Decoded with Tableau E-Workshop',
      description:
        'The event commenced with a welcome note by the IEEE WIE AG Delhi Section Treasurer - Dr. Sapna Gambhir. The resource person, Dr. Nagendra Aneja (Assistant Professor and Programme Leader at School of Digital Science, University of Brunei Darussalam) opened the session by explaining the basics of Tableau.',
      image:
        '1dEnBp4LIQmuckSLRiZKnhW0vpzD51L8j',
      
    },
      {
      id: 8,
      title: 'WIEALTH-Women Health And Diet',
      description:
        'The event commenced with a welcome note by the IEEE Delhi Section and SAC Chair - Dr. Rachana Garg. The speaker, Dr. Reena Arora, a passionate and avid practitioner of Ayurveda and presently the Advisor in Nasya - Delhi, opened the webinar by explaining the necessary diet plans that every woman should intake for a healthy living and about the different Ayurveda practices to cure diseases like cancer and epochs in women’s life.',
      image:
        '1c_VGuVcx0y6Dtf0kQGpK8WPvbGO2lAk_',
      
    },
      {
      id: 9,
      title: 'Women in Corporate World',
      description:
        'The event commenced with a welcome note by the Chief Guest of the event, Prof. Rachana Garg, Chair of IEEE Delhi Section who went on to give an enlightening example given by Ms. Sudha Murthy. Ms. Kankana Karkun explained every aspect of opportunities and the issues that are faced by women in the corporate world at every step of life and how to overcome them to emerge victorious in our professional life.',
      image:
        '1ChZ5KpnJ0jwGrQ6svBoetP7v6qD4wrdC',
      
    },
      {
      id: 10,
      title: 'WIECHAR-Defend What You Believe',
      description:
        'IEEE WIE AG Delhi Section and IEEE Delhi Section Student Activities Committee conducted the IEEE DELCON 2022 Special WIE track event "WIECHAR" an educational debate competition on women empowerment.',
      image:
        '1c_VGuVcx0y6Dtf0kQGpK8WPvbGO2lAk_',
      
    },
      {
      id: 11,
      title: 'Professional Diaries: Powering Through Transitions',
      description:
        'The event commenced with a welcome note by the IEEE Delhi Section and SAC Chair - Prof. Rachana Garg. The esteemed speaker for the session was Ms. Chetna Mahajan, Chief Information Officer - Zoominfo. She detailed her journey and how she came to this position after many ups and downs.',
      image:
        '1-W2W3OY6XkTOc-Ii_h3ifkwMpusO6dxD',
      
    },
  
    {
      id: 12,
      title: 'Award Ceremony 2022',
      description:
        'IEEE Delhi Section Student Activities Committee hosted the much-awaited IEEE Delhi Section Student Awards Ceremony 2022, on 16th April 2022, at Manav Rachna University, Faridabad, Haryana to recognize and felicitate the hard work of the diligent student volunteers of the section. Enthusiastic representatives from all the student branches under IEEE Delhi Section joined the event to commemorate their fellow volunteers.',
      image:
        '10D-rm0eFfMNWNsqbzj_2JRQqpknsqVX1',
      
    },
    {
      id: 13,
      title: 'Panel Discussion With Frontline Warriors',
      description:
        'It was a thoroughly engaging session with Lieutenant Colonel Atul Holkar and Dr Sandeep Nayak P wherein the evening began with the host of the day addressing panelists and audience members with a welcome message. Following that, Dr. Rachana Garg, Chair of IEEE Delhi Section and Student Activities Committee, gave a speech in which she briefed the audience on the significance and importance of the topic discussed in the event. ',
      image:
        '11GJiWqj1ndmeKxt_yodo7A58-6SJBbtp',
      
    },
    {
      id: 14,
      title: 'IEEE DSSYWC 2022',
      description:
        'On 17th September 2022, the IEEE Delhi Section Students - Young Professionals - Women in Engineering Congress 2022 (DSSYWC ‘22) successfully came to an end with more than 320 registered delegates and 17 participating Student Branches from across North India.',
      image:
        '1UPryu16m-ibS-9-JS-qWT-I5lEtz1HrY',
      
    },
    {
      id: 15,
      title: 'IEEE Delhi Section Execomm Meeting 2022',
      description:
        'IEEE Delhi Section extends their best wishes and warm gratitude to Prof. A. Q. Ansari for being appointed as the chair of IEEE Delhi Section for the term 2023-25. The IEEE Delhi Section is excited to work under the profound leadership of Prof. A. Q. Ansari and looks forward to a term filled with technological advances for the betterment of humanity. Alas, IEEE Delhi Section would like to thank Prof. Rachana Garg for guiding the section as a successful chair through her tenure in 2021-23.',
      image:
        '1cvlUysVXUHvXGulxDxzFKUIweySotUaY',
      
    },
    {
      id: 16,
      title: 'Future of NFTs',
      description:
        'The IEEE Delhi Section successfully conducted a captivating event titled "Future of NFT", on 19th of March 2023, which encapsulated the vast opportunities that exist in the realm of Web3 and highlighted the immense potential of Non-Fungible Tokens (NFTs) in revolutionizing the way we interact with digital content.',
      image:
        '1wfquPevm6qF7TMAaWS1k2y2CC9OOHxF0',
      
    },
  ]

  return (
    <Container id="gallery">
      <Content>
        <HeadingWithControl>
          <Heading>Gallery</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={`https://drive.google.com/uc?id=${card.image}`} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  
                 
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
