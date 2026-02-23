"use client";
import GenericPage from "@/components/GenericPage";
import MapChart from "@/components/Map";
import TextSection from "@/components/TextSection";
import { Box, Link } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import TableauComponent from "@/components/TableauComponent";


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
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <Link 
            href="/narrative_2" 
            underline="none" 
          >
            Research Question 2  &nbsp;
            <EastIcon />
          </Link>
        </Box>
      </GenericPage>
    </main>
  );
}