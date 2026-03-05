"use client";
import AboutSection from '@/components/AboutSection';
import GenericPage from '@/components/GenericPage';
import PageDivider from '@/components/PageDivider';

export default function AboutPage() {


  return (
    <main>
      <GenericPage 
        route="about" 
        pageTitle="About" 
      >
        <PageDivider text="Meet the Team!" />
        <AboutSection />
      </GenericPage>
    </main>
  );
}