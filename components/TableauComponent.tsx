// components/TableauComponent.tsx
'use client';
import { useEffect, useRef } from 'react';

interface TableauComponentProps {
  source: string;
  width?: string;
  height?: string;
}

export default function TableauComponent({ source, width = '100%', height = '600px' }: TableauComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous viz
    containerRef.current.innerHTML = '';

    // Dynamically import only in the browser
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js';
    script.type = 'module';
    script.onload = () => {
      const viz = document.createElement('tableau-viz');
      viz.setAttribute('src', source);
      viz.setAttribute('width', width);
      viz.setAttribute('height', height);
      viz.setAttribute('toolbar', 'bottom');
      viz.setAttribute('hide-tabs', 'false');
      containerRef.current?.appendChild(viz);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [source, width, height]);

  return <div ref={containerRef} style={{ width, minHeight: height }} />;
}