"use client";
import GenericPage from "@/components/GenericPage";
import TextSection from "@/components/TextSection";
import { Box, Link } from "@mui/material";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";


export default function ConclusionPage() {
  return (
    <main>
      <GenericPage 
        route="conclusion" 
        pageTitle="Conclusion" 
      >
        <NarrativeNav
          prevHref="/narrative_3"
          prevLabel="Research Question 3"
        />
      </GenericPage>
    </main>
  );
}