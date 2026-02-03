"use client";
import GenericPage from "../components/GenericPage";
import PhotoSection from "../components/PhotoSection"

export default function Home() {
  return (
    <div>
      <GenericPage
        route="home"
        pageTitle="Beyond the Board"
        pageSubtitle="The effect of socioeconomic factors on student outcomes."
        pageImageRoute="/images/default_background2.png"
      >
        <PhotoSection
          imageUrl="/images/image_placeholder.jpg"
          direction="left"
          sectionText="TEST TEXT"
        />
      </GenericPage>
    </div>
  );
}
