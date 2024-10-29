import React from "react";
import Navbar from "@/components/navbar/navbar";
import Layout from "@/components/services/services-layout";
import ClientLayout from "../client-layout";

export default function Services() {
  return (
    <ClientLayout>
      <Navbar />
      <Layout />
    </ClientLayout>
  );
}
