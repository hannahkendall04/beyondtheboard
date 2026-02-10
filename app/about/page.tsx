"use client";
import GenericPage from "../../components/GenericPage";
import { aboutData } from "../../public/data/about";
import { Card, CardContent, Container, CardMedia } from "@mui/material";

export default function AboutPage() {

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
              <Card key={person.name} variant="outlined" sx={{
                "width": 300,
                "marginTop": 2
              }}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={person.imageUrl}
                  title={person.name}
                />
                <CardContent>
                  <h1>{person.name}</h1>
                  <h2>{person.role}</h2>
                </CardContent>
              </Card>

            ))
            }
        </Container>
      </GenericPage>
    </main>
  );
}