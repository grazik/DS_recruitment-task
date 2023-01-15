import { PersonalData } from "@organisms/PersonalData/PersonalData";
import NoSsrWrapper from "@atoms/NoSsrWrapper/NoSsrWrapper";
import { Layout } from "@layouts/Layout";

export default function ProfilePage() {
  return (
    <Layout title={"Profile"}>
      <section className="wrapper">
        <h1 className={"title"}>Profile:</h1>
        <NoSsrWrapper>
          <PersonalData />
        </NoSsrWrapper>
      </section>
    </Layout>
  );
}
