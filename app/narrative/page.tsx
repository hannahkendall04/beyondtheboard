"use client";
import GenericPage from "@/components/GenericPage";
import MapChart from "@/components/Map";
import { Box } from "@mui/material";

export default function NarrativePage() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <Box sx={{ 
            // "marginBottom": 4,
            // "width": "90%"
            }}>
          <MapChart />
        </Box>
      </GenericPage>
    </main>
  );
}