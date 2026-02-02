"use client";
import GenericPage from "../components/GenericPage";

export default function Home() {
  return (
    <main>
      <GenericPage 
        route="home" 
        pageTitle="Beyond the Board" 
        pageSubtitle="The effect of socioeconomic factors on student outcomes." 
      />
    </main>
  );
}
