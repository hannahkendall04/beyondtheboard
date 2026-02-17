"use client";
import GenericPage from "../../components/GenericPage";
import TextSection from "@/components/TextSection";
import { dataCritiques } from "../../public/data/data-critique";

export default function DataCritiquePage() {
  return (
    <main>
      <GenericPage 
        route="data" 
        pageTitle="Data Critique" 
      >
        {
          dataCritiques.map(dataset => (
            <TextSection
              key={dataset.title}
              sectionHeader={dataset.title}
              sectionSubheader={dataset.description}
              sectionContent={dataset.critique}
              />
          ))
        }
      </GenericPage>
    </main>
  );
}