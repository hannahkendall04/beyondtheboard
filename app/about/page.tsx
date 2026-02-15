"use client";
import GenericPage from "../../components/GenericPage";
import { aboutData } from "../../public/data/about";
import { Card, CardContent, Container, CardMedia } from "@mui/material";
import { useState } from 'react';
import AboutCard from "../../components/AboutCard"

export default function AboutPage() {

  const isFlipped = useState(false);

  return (
    <main>
      <GenericPage 
        route="about" 
        pageTitle="About" 
      >
        <Container 
            sx={{
              "display": "flex",
              "flexWrap": "wrap",
              "justifyContent": "space-evenly",
            }}>
            {
            aboutData.map(person => (
              <AboutCard 
                name={person.name} 
                imageUrl={person.imageUrl}
                role={person.role}
                bio={person.bio}
                key={person.name}
              />
            ))
            }
        </Container>
      </GenericPage>
    </main>
  );
}