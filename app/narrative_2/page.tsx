"use client";
import GenericPage from "@/components/GenericPage";
import MapChart from "@/components/Map";
import TextSection from "@/components/TextSection";
import { Box, Link } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import TableauComponent from "@/components/TableauComponent";

export default function NarrativePage2() {
    return (
        <main>
            <GenericPage
                route="narrative"
                pageTitle="Narrative"
            >
                <TableauComponent source="https://public.tableau.com/views/RQ2_17718808379480/Sheet1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Link
                        href="/narrative_1"
                        underline="none"
                    >
                        <WestIcon />
                        &nbsp; Research Question 1
                    </Link>
                    <Link
                        href="/narrative_3"
                        underline="none"
                    >
                        Research Question 3  &nbsp;
                        <EastIcon />
                    </Link>
                </Box>
            </GenericPage>
        </main>
    );
}