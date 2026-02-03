"use client";
import GenericPage from "@/components/GenericPage";
import PhotoSection from "@/components/PhotoSection";
import TextSection from "@/components/TextSection";

export default function Home() {
  return (
    <div>
      <GenericPage
        route="home"
        pageTitle="Beyond the Board"
        pageSubtitle="The effect of socioeconomic factors on student outcomes."
        pageImageRoute="/images/default_background2.png"
      >
        <TextSection 
          sectionContent="TEST TEXT"
          sectionHeader="TEXT SECTION HEADER"
          sectionSubheader="TEXT SECTION SUBHEADER"
        />
        <PhotoSection
          imageUrl="/images/image_placeholder.jpg"
          direction="left"
          sectionText="TEST TEXT"
          sectionHeader="TEST HEADER"
        />
        <PhotoSection
          imageUrl="/images/image_placeholder.jpg"
          direction="right"
          sectionText="TEST TEXT"
          sectionHeader="ANOTHER HEADER"
        />
      </GenericPage>
    </div>
  );
}
