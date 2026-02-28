"use client";
import GenericPage from "@/components/GenericPage";
import TextSection from "@/components/TextSection";
import { Box } from "@mui/material";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";


export default function NarrativePage() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TextSection sectionContent={["a really good narrative making a really good argument..."]} sectionHeader="Header"/>
        <Box sx={{ 
            "marginBottom": 4,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1_17718788680660/Sheet1?:language=en-US&:sid=&:redirect=auth&publish=yes&showOnboarding=true&:display_count=n&:origin=viz_share_link" />
        </Box>
        <Box sx={{ 
            "marginBottom": 4,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1-2_17723156869430/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <Box sx={{ 
            "marginBottom": 4,
            }}>
            <TableauComponent source="https://public.tableau.com/views/RQ1-3/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        </Box>
        <NarrativeNav
          nextHref="/narrative_2"
          nextLabel="Research Question 2"
        />
      </GenericPage>
    </main>
  );
}