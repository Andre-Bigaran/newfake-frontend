// src/pages/index.tsx
import React from "react";
import PageContainer from "@/components/PageContainer";
import BannerHome from "@/components/BannerHome";

export default function Page() {
  return (
    <PageContainer title="Home">
      {/* Conteúdo da página, incluindo o BannerHome */}
      <BannerHome />
    </PageContainer>
  );
}
