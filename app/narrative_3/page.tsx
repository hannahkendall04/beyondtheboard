"use client";
import GenericPage from "@/components/GenericPage";
import MapChart from "@/components/Map";
import TextSection from "@/components/TextSection";
import { Box, Link } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import TableauComponent from "@/components/TableauComponent";

export default function NarrativePage3() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TableauComponent source="https://public.tableau.com/views/RQ3_17718811344180/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <Link 
            href="/narrative_2" 
            underline="none" 
          >
            <WestIcon />
            &nbsp;
            Research Question 2
          </Link>
        </Box>
      </GenericPage>
    </main>
  );
}