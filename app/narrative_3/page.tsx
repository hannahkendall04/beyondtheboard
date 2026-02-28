"use client";
import GenericPage from "@/components/GenericPage";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";
import { narrativeContent } from "@/public/data/narrative-content";
import TextSection from "@/components/TextSection";
import { Box } from "@mui/material";
 
export default function NarrativePage3() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TextSection 
            sectionContent={[narrativeContent.narrative3.note]}
            sectionHeader="Research Question 3" 
            sectionSubheader={narrativeContent.narrative3.rq}
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
          <TableauComponent source="https://public.tableau.com/views/RQ3revised/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <TextSection 
          sectionSubheader="Visualization Analysis"
          sectionContent={[
            narrativeContent.narrative3.analysis_1, 
            narrativeContent.narrative3.analysis_2
          ]}
        />
        <Box sx={{ 
            "marginBottom": 5,
            "marginTop": 5,
            }}>
          <TableauComponent source="https://public.tableau.com/views/RQ3-2_17720473667440/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <TextSection 
          sectionSubheader="Visualization Analysis"
          sectionContent={[
            narrativeContent.narrative3.analysis_3, 
            narrativeContent.narrative3.analysis_4
          ]}
        />
        <TextSection 
          sectionSubheader="Answer to Research Question"
          sectionContent={[
            narrativeContent.narrative3.rq_answer_1, 
            narrativeContent.narrative3.rq_answer_2,
            narrativeContent.narrative3.rq_answer_3
          ]}
        />
        <NarrativeNav
          prevHref="/narrative_2"
          prevLabel="Research Question 2"
          nextHref="/conclusion"
          nextLabel="Conclusion"
        />
      </GenericPage>
    </main>
  );
}