import React from "react";
import AboutLayout from "@/components/about-layout/about-layout";
import Navbar from "@/components/navbar/navbar";
import AboutAdditional from "@/components/about-layout/about-additional";
import ClientLayout from "../client-layout";

export default function About() {
  return (
    <ClientLayout>
      <Navbar />
      <AboutLayout />
      <h1 className="title" style={{ fontSize: "3rem", textAlign: "center", border: "none" }}>
        Our Clients
      </h1>
      <AboutAdditional />
    </ClientLayout>
  );
};