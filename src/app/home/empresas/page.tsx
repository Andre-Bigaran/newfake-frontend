// src/pages/index.tsx
import React from "react";
import PageContainer from "@/components/PageContainer";
import CompaniesCard from "@/components/CompaniesCard";

export default function Page() {
  return (
    <PageContainer title="Empresas">
      {/* Conteúdo da página, incluindo o BannerHome */}
      <CompaniesCard />
    </PageContainer>
  );
}
