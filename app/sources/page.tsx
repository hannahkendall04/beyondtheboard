"use client";
import GenericPage from "../../components/GenericPage";
import SourceCard from "../../components/SourceCard";
import { sources } from "@/public/data/sources";

export default function SourcesPage() {
  return (
    <main>
      <GenericPage
        route="sources"
        pageTitle="Sources"
        pageSubtitle="Annotated Bibliography"
      >
        <div style={{ marginTop: "48px" }}>
          {sources.map((source) => (
            <SourceCard
              key={source.title}
              title={source.title}
              citation={source.citation}
              analysis={source.analysis}
              link={source.link}
            />
          ))}
        </div>
      </GenericPage>
    </main>
  );
}