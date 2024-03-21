// src/pages/index.tsx
import React from "react";
import PageContainer from "@/components/PageContainer";
import UserProfile from "@/components/UserProfile";

export default function Page() {
  return (
    <PageContainer title="Profile">
      {/* Conteúdo da página, incluindo o BannerHome */}
      <UserProfile />
    </PageContainer>
  );
}
