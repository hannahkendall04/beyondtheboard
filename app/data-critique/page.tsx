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
        <h3>Link to Consolidated Dataset: <a href="https://docs.google.com/spreadsheets/d/1_2d2y4YjS0lv0OFw3pPa1zSbrjtccjxgVy-ETD305_8/edit?gid=0#gid=0">Final Datasets</a></h3>
        {
          dataCritiques.map(dataset => (
            <TextSection
              key={dataset.title}
              sectionHeader={dataset.title}
              sectionSubheader={dataset.description}
              sectionContent={dataset.critique}
              link={dataset.link}
              />
          ))
        }
      </GenericPage>
    </main>
  );
}