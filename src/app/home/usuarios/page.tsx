import PageContainer from "@/components/PageContainer";
import UserListComponent from "@/components/UserListComponent"; 

const users = [
  { name: "Usuário 1", avatar: "url_para_avatar_1", tag: "tag1" },
  { name: "Usuário 2", avatar: "url_para_avatar_2", tag: "tag2" },
];

export default function Page() {
  return (
    <PageContainer title="Usuários">
      // @ts-ignore
      <UserListComponent users={users} />
    </PageContainer>
  );
}
