"use client";
import GenericPage from "@/components/GenericPage";
import PhotoSection from "@/components/PhotoSection";
import TextSection from "@/components/TextSection";
import AboutSection from "@/components/AboutSection";
import PageDivider from "@/components/PageDivider";

export default function Home() {
  return (
    <div>
      <GenericPage
        route="home"
        pageTitle="Beyond the Board"
        pageSubtitle="The effect of socioeconomic factors on student outcomes."
      >
        <TextSection 
          sectionContent={["TEST TEXT"]}
          sectionHeader="About This Project"
          sectionSubheader="TEXT SECTION SUBHEADER"
        />
        <PhotoSection
          imageUrl="/images/classroom2.jpg"
          direction="right"
          sectionText={["TEST TEXT"]}
          sectionHeader="ANOTHER HEADER"
        />
        <br />
        <br />
        <PageDivider text="Meet the Team!" />
        <AboutSection />
      </GenericPage>
    </div>
  );
}
