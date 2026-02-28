"use client";
import GenericPage from "@/components/GenericPage";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";

export default function NarrativePage2() {
    return (
        <main>
            <GenericPage
                route="narrative"
                pageTitle="Narrative"
            >
                <TableauComponent source="https://public.tableau.com/views/RQ2_17718808379480/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
                <NarrativeNav
                    nextHref="/narrative_3"
                    nextLabel="Research Question 3"
                    prevHref="/narrative_1"
                    prevLabel="Research Question 1"
                />
            </GenericPage>
        </main>
    );
}