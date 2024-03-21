import PageContainer from "@/components/PageContainer";
import UserListComponent from "@/components/UserListComponent"; // Importe o componente UserListComponent aqui

// Suponha que você tenha uma lista de usuários disponível neste arquivo ou obtida de outra fonte
const users = [
  { name: "Usuário 1", avatar: "url_para_avatar_1", tag: "tag1" },
  { name: "Usuário 2", avatar: "url_para_avatar_2", tag: "tag2" },
  // Outros usuários...
];

export default function Page() {
  return (
    <PageContainer title="Usuários">
      <UserListComponent users={users} />
    </PageContainer>
  );
}
