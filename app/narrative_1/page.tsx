"use client";
import GenericPage from "@/components/GenericPage";
import TextSection from "@/components/TextSection";
import { Box } from "@mui/material";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";
import { narrativeContent } from "@/public/data/narrative-content";


export default function NarrativePage() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TextSection 
          sectionContent={[narrativeContent.narrative1.note]}
          sectionHeader="Research Question 1" 
          sectionSubheader={narrativeContent.narrative1.rq}
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1_17718788680660/Sheet1?:language=en-US&:sid=&:redirect=auth&publish=yes&showOnboarding=true&:display_count=n&:origin=viz_share_link" />
        </Box>
        <TextSection 
          sectionSubheader="Visualization Analysis"
          sectionContent={[narrativeContent.narrative1.analysis_1]}
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1-2_17723156869430/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <TextSection 
          sectionSubheader="Visualization Analysis"
          sectionContent={[narrativeContent.narrative1.analysis_2]}
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1-3/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <TextSection 
          sectionSubheader="Visualization Analysis"
          sectionContent={[narrativeContent.narrative1.analysis_3]}
        />
        <TextSection 
            sectionSubheader="Answer to Research Question"
            sectionContent={[
                narrativeContent.narrative1.rq_answer_1,
                narrativeContent.narrative1.rq_answer_2,
                narrativeContent.narrative1.rq_answer_3,
            ]}
        />
        <NarrativeNav
          nextHref="/narrative_2"
          nextLabel="Research Question 2"
          prevHref="/timeline"
          prevLabel="Timeline"
        />
      </GenericPage>
    </main>
  );
}