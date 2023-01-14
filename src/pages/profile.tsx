import { PersonalData } from "@organisms/PersonalData/PersonalData";
import NoSsrWrapper from "@atoms/NoSsrWrapper/NoSsrWrapper";

export default function ProfilePage() {
  return (
    <section className="wrapper">
      <h1 className={"title"}>Profile:</h1>
      <NoSsrWrapper>
        <PersonalData />
      </NoSsrWrapper>
    </section>
  );
}
