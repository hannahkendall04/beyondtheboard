"use client";
import GenericPage from "@/components/GenericPage";
import PhotoSection from "@/components/PhotoSection";
import TextSection from "@/components/TextSection";
import AboutSection from "@/components/AboutSection";
import PageDivider from "@/components/PageDivider";
import { narrativeContent } from "../public/data/narrative-content";
import ResearchQuestionCard from "@/components/ResearchQuestionCard";

export default function Home() {
  return (
    <div>
      <GenericPage
        route="home"
        pageTitle="Beyond the Board"
        pageSubtitle="The effect of socioeconomic factors on student outcomes."
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
        <PageDivider text="Meet the Team!" />
        <AboutSection />
      </GenericPage>
    </div>
  );
}
