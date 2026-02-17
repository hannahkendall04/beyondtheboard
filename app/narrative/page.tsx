"use client";
import GenericPage from "@/components/GenericPage";
import MapChart from "@/components/Map";
import TextSection from "@/components/TextSection";
import { Box } from "@mui/material";

export default function NarrativePage() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TextSection sectionContent={["a really good narrative making a really good argument..."]} sectionHeader="Header"/>
        <Box sx={{ 
            // "marginBottom": 4,
            // "width": "90%"
            }}>
          <MapChart mapHeader="Map!" mapSubheader="w/some fake data..." />
        </Box>
      </GenericPage>
    </main>
  );
}