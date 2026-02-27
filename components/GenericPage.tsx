"use client";
import React, { PropsWithChildren } from "react";
import Navbar from "../components/Navbar";
import HeaderOverlay from "./HeaderOverlay";
import Footer from "./Footer";

interface GenericPageProps {
  route: string;
  pageTitle: string;
  pageSubtitle?: string;
  pageImageRoute?: string;
}

const GenericPage: React.FC<PropsWithChildren<GenericPageProps>> = ({
  route,
  pageTitle,
  pageSubtitle,
  pageImageRoute,
  children,
}) => {
  return (
    <>
      <style>{`
        .generic-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--section-bg, #faf9f7);
        }

        .generic-page-content {
          flex: 1;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 24px 64px;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .generic-page-content {
            padding: 28px 16px 48px;
          }
        }
      `}</style>

      <main className="generic-page">
        <Navbar route={route} scrollThreshold={0} />
        <HeaderOverlay
          imageUrl={pageImageRoute}
          overlayTextPrimary={pageTitle}
          overlayTextSecondary={pageSubtitle}
        />
        <div className="generic-page-content">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default GenericPage;