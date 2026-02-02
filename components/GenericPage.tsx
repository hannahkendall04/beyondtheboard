"use client";
import { Container } from "@mui/material";
import Navbar from "../components/Navbar";
import React from 'react';

interface GenericPageProps {
    route: string, 
    pageTitle: string,
    pageSubtitle?: string, 
    pageImageRoute?: string

}

const  GenericPage: React.FC<GenericPageProps> = ({route, pageTitle, pageSubtitle, pageImageRoute}) => {
  return (
    <main>
      <Navbar route={route}/>
      <Container className="page-container">
        <h1>{pageTitle}</h1>
        <h2>{pageSubtitle && pageSubtitle}</h2>
      </Container>
    </main>
  );
}

export default GenericPage;
