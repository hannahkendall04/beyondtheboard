"use client";
import GenericPage from "@/components/GenericPage";
import TextSection from "@/components/TextSection";
import { Box } from "@mui/material";
import NarrativeNav from "@/components/NarrativeNav";
import { narrativeContent } from "@/public/data/narrative-content";
import TimelineEmbed from "@/components/TimelineEmbed";


export default function TimelinePage() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TextSection 
          sectionContent={[narrativeContent.timeline.context]}
          sectionHeader="Timeline" 
          sectionSubheader="Historical context for our research questions"
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
                <TimelineEmbed />
        </Box>
        
        <NarrativeNav
          nextHref="/narrative_1"
          nextLabel="Research Question 1"
        />
      </GenericPage>
    </main>
  );
}