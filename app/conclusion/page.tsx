"use client";
import GenericPage from "@/components/GenericPage";
import TextSection from "@/components/TextSection";
import PhotoSection from "@/components/PhotoSection";
import NarrativeNav from "@/components/NarrativeNav";
import { narrativeContent } from "@/public/data/narrative-content";


export default function ConclusionPage() {
  return (
    <main>
      <GenericPage 
        route="conclusion" 
        pageTitle="Conclusion" 
      >
        <TextSection 
          sectionHeader="Conclusion"
          sectionSubheader={narrativeContent.conclusion.rq}
          sectionContent={[narrativeContent.conclusion.analysis_1]}
        />
        <PhotoSection 
          imageUrl="/images/graduation.jpg"
          sectionText={[narrativeContent.conclusion.analysis_2]}
          direction="right"
        />
        <TextSection 
          sectionContent={[narrativeContent.conclusion.analysis_3]}
        />
        <NarrativeNav
          prevHref="/narrative_3"
          prevLabel="Research Question 3"
        />
      </GenericPage>
    </main>
  );
}