import Navbar from "@/components/navbar/navbar";
import MainLayout from "@/components/main-layout/main-layout";
import ClientLayout from "../client-layout";

export default function Home() {
  return (
    <ClientLayout>
          <Navbar />
          <MainLayout />
    </ClientLayout>
  );
}
