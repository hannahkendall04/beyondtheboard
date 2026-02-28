"use client";
import GenericPage from "@/components/GenericPage";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";

export default function NarrativePage3() {
  return (
    <main>
      <GenericPage 
        route="narrative" 
        pageTitle="Narrative" 
      >
        <TableauComponent source="https://public.tableau.com/views/RQ3revised/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
        <TableauComponent source="https://public.tableau.com/views/RQ3-2_17720473667440/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
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