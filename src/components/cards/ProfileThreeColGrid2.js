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
import img1 from "../features/gridimages2/Kailash\ Maurya\ -\ Kailash\ Maurya.png"
import img2 from "../features/gridimages2/ANSHUL\ YADAV.jpg"
import img3 from "../features/gridimages2/IMG-20230325-WA0147\ -\ Ashmit\ Sharma.jpg"
import img4 from "../features/gridimages2/IMG20230711211336\ -\ PRERNA\ YADAV.jpg"
import img5 from "../features/gridimages2//+91\ 74897\ 41966\ 20230904_222040\ -\ Utkarsh\ Luthra.jpg"
import img6 from "../features/gridimages2/IMG-20230507-WA0052\(3\)\ -\ RIYA\ CHOUDHARY.jpg"
import img7 from "../features/gridimages2/IMG_20230414_213548\ -\ SNEHA\ SONIWAL.jpg"
import img8 from "../features/gridimages2/IMG_20230628_145140\ -\ Arushi\ Gupta.png"
import img9 from "../features/gridimages2/RIu\ -\ Riya\ Singh.jpg"
import img10 from "../features/gridimages2/WhatsApp\ Image\ 2023-09-05\ at\ 20.59.39\ -\ ANSHITA\ GARG\ 2K21_CO_75.jpeg"
import img11 from "../features/gridimages2/C0DF52DB-7A4C-49D4-BE5D-83786B251D3E\ -\ Sakshi\ Singh.jpeg"
import img12 from "../features/gridimages2/20230424_121247\ -\ Husain\ Saifee.jpg"
import img13 from "../features/gridimages2/WhatsApp\ Image\ 2023-06-14\ at\ 23.13.37\ -\ Aashi\ Sharma.jpeg"
import img14 from "../features/gridimages2/IMG_20230915_133930\ -\ Sarli\ Sengar.png"
import img15 from "../features/gridimages2/shubh sharma.jpeg"
import img16 from "../features/gridimages/Charu-Networking\ and\ Social\ Media\ Coordinator\ -\ 26_Charu\ Kaushik.jpeg"
import img17 from "../features/gridimages2/20230606_173456\ -\ Ayush\ Rajpurohit.jpg"
import img18 from "../features/gridimages2/IMG_20230509_220149_761\ -\ Prabhjot\ Singh.jpg"
import img19 from "../features/gridimages2/LAKSHAY CHAWLA.jpg"
import img20 from "../features/gridimages2/Shashi Kushwaha.jpg"
import img21 from "../features/gridimages2/IMG_2859\ -\ ANSH\ ARORA.JPG"
import img22 from "../features/gridimages2/ayush\ -\ AYUSH\ KUMAR.jpg"
import img23 from "../features/gridimages2/8998363E-138B-43F8-8FDC-8988F55F0835\ -\ Yashika\ Jain.JPG"
import img24 from "../features/gridimages2/WhatsApp\ Image\ 2023-09-15\ at\ 1.55.43\ PM\ -\ Kunal\ Kumar\ Sharma.jpeg"
import img25 from "../features/gridimages2/IMG-20230813-WA0290\ -\ Ishita\ Choudhary.jpg"
import img26 from "../features/gridimages2/IMG_7999\ -\ Dipesh\ Ranjan.JPG"
import img27 from "../features/gridimages2/IMG_6925\ -\ Agastya\ J.jpg";
import img28 from "../features/gridimages2/IMG-20230904-WA0029\ -\ Sahib\ Preet\ Singh.jpg"
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
      name: "Kailash Maurya",
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
      name: "Anshul Yadav",
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
      name: "Ashmit Sharma",
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
      name: "Prerna Yadav",
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
      name: "Utkarsh Luthra",
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
      name: "Riya Choudhary",
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
      name: "Sakshi Singh",
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
      name: "Husain Saifee",
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
      name: "Aashi Sharma",
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
      name: "Sarli Sengar",
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
      imageSrc:img27,
      position: "Webmaster",
      name: "Agastya Jhingan",
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
      name: "Kunal Kumar Sharma",
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
      name: "Ishita Choudhary",
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
      name: "Dipesh Ranjan",
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
      name: "Sahib Preet Singh",
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
      name: "Sneha Soniwal",
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
      name: "Arushi Gupta",
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
      name: "Riya Singh",
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
      name: "Anshita Garg",
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
      imageSrc:img17,
      position: "Technical Activities",
      name: "Ayush Rajpurohit",
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
      name: "Prabhjot Singh",
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
      imageSrc:img21,
      position: "Graphic Designing",
      name: "Ansh Arora",
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
      name: "Ayush Kumar",
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
      name: "Yashika Jain",
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
                  {/* {card.links.map((link, linkIndex) => (
                    (link.icon==LinkedinIcon&&<a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>)
                  ))} */}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
          
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};


























