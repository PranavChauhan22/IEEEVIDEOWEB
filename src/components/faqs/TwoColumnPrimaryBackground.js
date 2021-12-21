import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-primary-900 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const FaqsContainer = tw.div`mt-10 sm:mt-16 w-full flex-1 lg:flex justify-between items-start max-w-screen-lg mx-auto`;
const FaqsColumn = tw.div`w-full lg:max-w-lg lg:mr-12 last:mr-0`;
const Faq = tw.div`select-none cursor-pointer border-b-2 border-primary-300 hover:border-primary-500 transition-colors duration-300 py-6`;
const Question = tw.div`flex justify-between items-center`;
const QuestionText = tw.div`text-sm sm:text-lg font-semibold tracking-wide`;
const QuestionToggleIcon = styled(motion.span)`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const Answer = tw(motion.div)`hidden text-sm font-normal mt-4 text-gray-300`;

export default ({
  subheading = "",
  heading = "Frequently Asked Questions",
  description = "",
  faqs = [
    {
      question: "What is IEEE?",
      answer:
        "IEEE is the world’s largest technical professional organisation dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities."
    },
    {
      question: "What is IEEE SAC?",
      answer:
        "Student Activities Committee (SAC) is an IEEE committee responsible for student programs and benefits, and making recommendations to the Member and Geographic Activities (MGA) Board. It is filled with IEEE volunteers and supported by IEEE staff. These volunteer members provide important viewpoints and information and represent the voice of the over 100,000 IEEE Student and Graduate Student members worldwide."
    },
    {
      question: "What is IEEE Delhi Section Student Network?",
      answer:
        "IEEE Delhi Section Student Network is a team of student volunteers from student branches under the Delhi Section and its subsections that manages and conducts activities focussed towards the young and aspiring student engineers and provides support for collaborations."
    },
   
    {
      question: "How to become an IEEE Student Member? ",
      answer:
        "Join now and gain immediate access to all the valuable benefits and features of IEEE membership. Enhance your IEEE membership by joining a Society specialising in your technical interests, for as little as US$10 per year. To join IEEE: https://www.ieee.org/membership-application/join.html."
    },
  
    {
      question: "How can Branch counsellor information be updated in Section Database?",
      answer:
        `a) i) An email can be sent to ieeedelhisac@gmail.com.
        ii) The reported officer can report the new officer directly on the vTools platform.`
    },
    {
      question: "How to open a new IEEE Student Branch Society Chapter?",
      answer:
        "A Chapter shall be a technical subunit of a Region, one or more Sections, or a Geographic Council. There may be single Society Chapters, joint Society Chapters, and Technical Council Chapters. Chapters are your local link to the valuable resources available from IEEE and its 40+ Societies and Technical Councils. Follow the link for complete information: https://mga.ieee.org/resources-operations/formations-petitions#chapter and go to “Petition to form an IEEE Society/Technical Council Chapter and Joint Chapter”.",
    }
  ]
}) => {
  const faqCol1 = [];
  const faqCol2 = [];
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  faqs.map((faq, index) => {
    const renderedFaq = (
      <Faq key={index} onClick={() => toggleQuestion(index)}>
        <Question>
          <QuestionText>{faq.question}</QuestionText>
          <QuestionToggleIcon
            variants={{
              collapsed: { rotate: 0 },
              open: { rotate: -180 }
            }}
            initial="collapsed"
            animate={activeQuestionIndex === index ? "open" : "collapsed"}
            transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ChevronDownIcon />
          </QuestionToggleIcon>
        </Question>
        <Answer
          variants={{
            open: { opacity: 1, height: "auto", marginTop: "16px", display: "block" },
            collapsed: { opacity: 0, height: 0, marginTop: "0px", display: "none" }
          }}
          initial="collapsed"
          animate={activeQuestionIndex === index ? "open" : "collapsed"}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {faq.answer}
        </Answer>
      </Faq>
    );

    if (index % 2 === 0) faqCol1.push(renderedFaq);
    else faqCol2.push(renderedFaq);

    return null;
  });
  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <FaqsContainer>
          <FaqsColumn>{faqCol1}</FaqsColumn>
          <FaqsColumn>{faqCol2}</FaqsColumn>
        </FaqsContainer>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
