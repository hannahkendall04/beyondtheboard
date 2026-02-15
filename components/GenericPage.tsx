"use client";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import React, {PropsWithChildren} from 'react';
import HeaderOverlay from "./HeaderOverlay";
import Footer from "./Footer"

interface GenericPageProps {
    route: string, 
    pageTitle: string,
    pageSubtitle?: string, 
    pageImageRoute?: string

}

const  GenericPage: React.FC<PropsWithChildren<GenericPageProps>> = ({route, pageTitle, pageSubtitle, pageImageRoute, children}) => {
  return (
    <main>
      <Navbar route={route} scrollThreshold={15}/>
      <HeaderOverlay 
          imageUrl={pageImageRoute} 
          overlayTextPrimary={pageTitle} 
          overlayTextSecondary={pageSubtitle}
      /> 
      <Container sx={{ marginTop: 0, marginBottom: 3}}>
        {children}
      </Container>
      <Footer />
    </main>
  );
}

export default GenericPage;
