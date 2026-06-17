"use client";
import GenericPage from "@/components/GenericPage";
import PhotoSection from "@/components/PhotoSection";
import TextSection from "@/components/TextSection";
// import AboutSection from "@/components/AboutSection";
import PageDivider from "@/components/PageDivider";
import { narrativeContent } from "../public/data/narrative-content";
import ResearchQuestionCard from "@/components/ResearchQuestionCard";
import { Box } from '@mui/material';
import TimelineEmbed from "@/components/TimelineEmbed";

export default function Home() {
  return (
    <div>
      <GenericPage
        route="home"
        pageTitle="JIMMY HAB"
        pageSubtitle="The effects of race and socioeconomic factors on student outcomes."
      >
        <TextSection 
          sectionContent={[narrativeContent.homePage.introduction_1]}
          sectionHeader="About This Project"
          sectionSubheader="Why study the effect of socioeconomic factors on educational outcomes?"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: 30}}>
          <ResearchQuestionCard question={narrativeContent.homePage.rq1} index={0} href="/narrative_1" />
          <ResearchQuestionCard question={narrativeContent.homePage.rq2} index={1} href="/narrative_2" />
          <ResearchQuestionCard question={narrativeContent.homePage.rq3} index={2} href="/narrative_3" />
        </div>
        <PhotoSection
          imageUrl="/images/classroom2.jpg"
          direction="right"
          sectionText={[narrativeContent.homePage.introduction_2]}
        />
        <br />
        <br />
        <PageDivider text="Timeline" />
        {/* <AboutSection /> */}
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
                <TimelineEmbed />
        </Box>
      </GenericPage>
    </div>
  );
}
