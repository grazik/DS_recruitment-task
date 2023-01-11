import { SessionStorage } from "@utils/sessionStorage";
import { storageKeys } from "@constants/storageKeys";
import { isNotEmpty } from "@utils/isNotEmpty/isNotEmpty";
import { PersonalData } from "@organisms/PersonalData/PersonalData";
import { NoData } from "@organisms/NoData/NoData";

export default function ProfilePage() {
  const formData = SessionStorage.getRecord(storageKeys.PERSONAL_DATA);

  console.log(isNotEmpty(formData));

  return (
    <section className="wrapper">
      <h1>Profile:</h1>
      {isNotEmpty(formData) ? <PersonalData /> : <NoData />}
    </section>
  );
}
