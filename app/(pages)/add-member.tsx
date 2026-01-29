import { useRouter } from "expo-router";
import { AddMemberForm } from "../../components";

export default function AddMember() {
  const router = useRouter();

  return (
    <AddMemberForm
      onSubmit={(data) => {
        console.log("New member:", data);
        router.back();
      }}
      onCancel={() => router.back()}
    />
  );
}
