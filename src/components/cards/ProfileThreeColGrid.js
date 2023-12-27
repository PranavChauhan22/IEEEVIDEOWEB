import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import "../features/stylee.css"
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import img1 from "../features/gridimages2/Tanisha Dhawan.JPG"
import img2 from "../features/gridimages2/Piyush - Piyush Kumar Sahoo.jpg"
import img3 from "../features/gridimages2/Kailash Maurya - Kailash Maurya.png"
import img4 from "../features/gridimages2/ANSHUL YADAV.jpg"
import img5 from "../features/gridimages2/divyansh-bansal - Divyansh Bansal.jpeg"
import img6 from "../features/gridimages2/Vaidehi Purohit - Vaidehi Purohit.jpeg"
import img7 from "../features/gridimages2/Roshni Sahoo.jpeg"
import img8 from "../features/gridimages2/Simar Jyot Singh Narang.jpeg"
import img9 from "../features/gridimages2/srishti singh.jpeg"
import img10 from "../features/gridimages2/Sanjana K.jpg"
import img11 from "../features/gridimages2/Mohsina Bilal.jpeg"
import img12 from "../features/gridimages2/SHRUTI KUHAR.jpeg"
import img13 from "../features/gridimages2/dheeraj Jain.jpg"
import img14 from "../features/gridimages2/Rishi Raj Thakur.jpg"
import img15 from "../features/gridimages2/shubh sharma.jpeg"
import img16 from "../features/gridimages/Charu-Networking\ and\ Social\ Media\ Coordinator\ -\ 26_Charu\ Kaushik.jpeg"
import img17 from "../features/gridimages2/My Photo - Vikramaditya Hiran.jpeg"
import img18 from "../features/gridimages2/Mayank Jaiswal.jpg"
import img19 from "../features/gridimages2/LAKSHAY CHAWLA.jpg"
import img20 from "../features/gridimages2/Shashi Kushwaha.jpg"
import img21 from "../features/gridimages2/ISHAN SHARMA.jpg"
import img22 from "../features/gridimages2/Shobhna Sharma.jpg"
import img23 from "../features/gridimages2/ Kshitij Singh.JPG"
import img24 from "../features/gridimages2/TARUN KUMAR SHARMA.jpg"
import img25 from "../features/gridimages2/Rohan Singh.png"
import img26 from "../features/gridimages2/Nandini.png"
import img27 from "../features/gridimages2/Pranav Chauhan.jpg"
import img28 from "../features/gridimages2/Amrit Kaul.jpeg"
import img29 from "../features/gridimages2/Saumya Taneja.jpeg"
import img30 from "../features/gridimages2/vandana chauhan.jpg"
import img31 from "../features/gridimages2/Vishal Kumar Singh.jpg"

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet These Fine Folks.",
  subheading = "Our Team",
  description = "",
  cards = [

   
    {
      imageSrc:img1,
      position: "Mentor",
      name: "Tanisha Dhawan",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/tanisha-dhawan-9b1b331ab",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img2,
      position: "Mentor",
      name: "Piyush Kumar Sahoo",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/piyush-kumar-sahoo-dtu",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
   
    {
      imageSrc:img3,
      position: "Section Student Representative",
      name: "Kailash Maurya",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/kailash-maurya-032898208/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img4,
      position: "Section Student Representative",
      name: "Anshul Yadav",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/anshul-yadav-784602208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc:img5,
      position: "Subsection Student Representative",
      name: "Divyansh Bansal",
      name1: "Chandigarh",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/idivyanshbansal",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img6,
      position: "Subsection Student Representative",
      name: "Vaidehi Purohit",
      name1: "Rajasthan",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/vaidehipurohit01",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },

    {
      imageSrc:img11,
      position: "Networking And Social Media",
      name: "Mohsina Bilal",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "www.linkedin.com/in/mohsina-bilal-3ab454221",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img12,
      position: "Networking And Social Media",
      name: "Shruti Kuhar",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shruti-kuhar-235884230/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img13,
      position: "Networking And Social Media",
      name: "Dheeraj Jain",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/dheeraj-jain-691011202",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img14,
      position: "Networking And Social Media",
      name: "Rishi Raj Thakur",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/rishi-raj-thakur-24b3a0213",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img15,
      position: "Networking And Social Media",
      name: "Shubh Sharma",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shubh-sharma-shu19510/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
    {
      imageSrc:img27,
      position: "Webmaster",
      name: "Pranav Chauhan",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/pranav-chauhan-217bb11b9",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img24,
      position: "Videography",
      name: "Tarun Kumar Sharma",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/tarun-kumar-sharma-7132a122b",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img25,
      position: "Editorial",
      name: "Rohan Kumar Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/rohan-singh-gangster",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img26,
      position: "Editorial",
      name: "Nandini Pachauri",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/nandini-pachauri/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img28,
      position: "Editorial",
      name: "Amrit Kaul",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/amrit-kaul-289499208",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img7,
      position: "Women In Engineering",
      name: "Roshni Sahoo",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/roshni-sahoo-107513208/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
    {
      imageSrc:img8,
      position: "Women In Engineering",
      name: "Simar Jyot",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/sjsn2002",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
    {
      imageSrc:img9,
      position: "Women In Engineering",
      name: "Srishti Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/srishti-singh-819ba2202",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
    {
      imageSrc:img10,
      position: "Women In Engineering",
      name: "Sanjana K",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/sanjana-k-2793421b5",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img29,
      position: "Women In Engineering",
      name: "Saumya Taneja",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/saumya-taneja-867625144",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img30,
      position: "Women In Engineering",
      name: "Vandana Chauhan",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/chvandana",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img17,
      position: "Technical Activities",
      name: "Vikramaditya Hiran",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "www.linkedin.com/in/vikramaditya-hiran-5502a3141/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img18,
      position: "Technical Activities",
      name: "Mayank Jaiswal",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/mayankjaiswal2002",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img19,
      position: "Technical Activities",
      name: "Lakshay Chawla",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/lakshaychawla",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img20,
      position: "Technical Activities",
      name: "Shashi Kushwaha",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shashi-kushwaha-339aa4221",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img21,
      position: "Graphic Designing",
      name: "Ishan Sharma",
      name1: "Lead",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://bit.ly/ishan_linkedin",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img22,
      position: "Graphic Designing",
      name: "Shobhna Sharma",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/shobhna-sharma-6500ba1b9",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc:img23,
      position: "Graphic Designing",
      name: "Kshitij Singh",
      name1: "",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://www.linkedin.com/in/kshitij-singh1118/",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
   
  
    
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards style={{textAlign:"center"}}>
         

          
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage className="imgt" imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <span className="name1">{card.name1}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    (link.icon==LinkedinIcon&&<a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>)
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
          
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};

