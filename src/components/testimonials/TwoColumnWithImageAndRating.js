import "slick-carousel/slick/slick.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import loveIllustrationImageSrc from "images/love-illustration.svg";
import { ReactComponent as StarIconBase } from "images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";
import img1 from "../features/gridimages/Rachana_ma\'am.jpg"
import img3 from "../components_images/ansari.jpeg"
import img2 from "../components_images/prernagaur.jpeg"
import img4 from "../components_images/Vijaylata.jpeg"

import img10 from "../features/OnlineReview.gif"
const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

export default ({
  imageSrc = loveIllustrationImageSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  subheading = "",
  heading = "Testimonials",
  description = "",
  textOnLeft = false,
  testimonials = [
    {
      stars: 5,
      profileImageSrc:
        img2,
      heading: "",
      quote:
        "With each passing month and year, the IEEE Delhi Section has flourished, and I've been fortunate enough to be able to assist the SAC on their path. They have had a positive impact on many students through their events and webinars, and they will continue to do so for all of their upcoming activities. Even the most difficult circumstances haven't dampened their passion for volunteering at IEEE.",
      customerName: "Prof. Prerna Gaur",
      customerTitle: "Student Activities Committee Chair"
    },
    {
      stars: 5,
      profileImageSrc:
      img1,
      heading: "",
      quote:
        "IEEE Delhi Section volunteers have been working persistently and regularly to improve technology for the greater good. They've worked relentlessly to bridge the gap between industry and academia, and have given the community several opportunities to learn and grow. They are capable of completing any duty assigned to them and supporting the section in accomplishing its objectives and vision.",
      customerName: "Prof. Rachana Garg",
      customerTitle: "SAC Member"
    },
    {
      stars: 5,
      profileImageSrc:
      img3,
      heading: "",
      quote:
        "Over the years, the IEEE Delhi Section has proven its worth on a variety of platforms. The division has a dedicated workforce, full of energised and highly skilled professionals who have tirelessly worked for the advancement and benefit of the society. The Delhi Section has always prioritised providing opportunities for talented student leaders and engineers to pursue their ambitions. Volunteerism is highly valued in the organisation, and is one of the primary reasons for its success.",
      customerName: "Prof. Abdul Quaiyum Ansari",
      customerTitle: "SAC Member"
    },
    {
      stars: 5,
      profileImageSrc:
      img4,
      heading: "",
      quote:
        "IEEE Delhi Section has been a shining example of continuous growth and accomplishments in an era when the world is more focused on sustainable growth.The IEEE Delhi Section recognises that innovation does not happen in a vacuum; it requires collaboration among members who share a common vision, and it has given an integrated platform for many years. Hands-on courses, workshops, conferences, congresses, and webinars are all used to promote professional development.",
      customerName: "Dr. Y. Vijayalata Reddy",
      customerTitle: "SAC Member"
    },
    
  ]
}) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <Fade up duration={1000}>

          <img src={img10}/>
          </Fade>
          <TextColumn textOnLeft={textOnLeft}>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <TestimonialSlider arrows={false} ref={setSliderRef}>
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index}>
                  
                  <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerInfoAndControlsContainer>
                    <CustomerInfo>
                      <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                      <CustomerTextInfo>
                        <CustomerName>{testimonial.customerName}</CustomerName>
                        
                      </CustomerTextInfo>
                    </CustomerInfo>
                    <Controls>
                      <ControlButton onClick={sliderRef?.slickPrev}>
                        <ArrowLeftIcon />
                      </ControlButton>
                      <div className="divider" />
                      <ControlButton onClick={sliderRef?.slickNext}>
                        <ArrowRightIcon />
                      </ControlButton>
                    </Controls>
                  </CustomerInfoAndControlsContainer>
                </Testimonial>
              ))}
            </TestimonialSlider>
          </TextColumn>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
