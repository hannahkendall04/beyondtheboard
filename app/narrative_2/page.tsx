"use client";
import GenericPage from "@/components/GenericPage";
import TableauComponent from "@/components/TableauComponent";
import NarrativeNav from "@/components/NarrativeNav";
import { narrativeContent } from "@/public/data/narrative-content";
import TextSection from "@/components/TextSection";
import { Box} from "@mui/material";

export default function NarrativePage2() {
    return (
        <main>
            <GenericPage
                route="narrative"
                pageTitle="Narrative"
            >
                <TextSection 
                    sectionContent={[narrativeContent.narrative2.note]}
                    sectionHeader="Research Question 2" 
                    sectionSubheader={narrativeContent.narrative2.rq}
                />
                <Box sx={{ 
                    "marginBottom": 5,
                    "marginTop": 5,
                }}>
                    <TableauComponent source="https://public.tableau.com/views/RQ2_17718808379480/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
                </Box>
                <TextSection 
                    sectionSubheader="Visualization Analysis"
                    sectionContent={[narrativeContent.narrative2.analysis_1]}
                />
                <TextSection 
                    sectionSubheader="Answer to Research Question"
                    sectionContent={[
                        narrativeContent.narrative2.rq_answer_1,
                        narrativeContent.narrative2.rq_answer_2,
                        narrativeContent.narrative2.rq_answer_3,
                    ]}
                />
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