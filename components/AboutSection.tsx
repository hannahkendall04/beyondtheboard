"use client";
import { aboutData } from "../public/data/about";
import { Container } from "@mui/material";
import AboutCard from "./AboutCard"

export default function AboutSection() {

  return (
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
  );
}