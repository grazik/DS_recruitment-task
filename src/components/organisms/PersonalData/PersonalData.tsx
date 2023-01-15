import { SessionStorage } from "@utils/sessionStorage";
import { storageKeys } from "@constants/storageKeys";
import { PersonalData as PersonalDataType } from "@typing/PersonalData";
import { NoData } from "@molecules/NoData/NoData";
import { InformationEntry } from "@atoms/InformationEntry/InformationEntry";
import { format } from "date-fns";
import { parseDateString } from "@utils/parseDateString";
import { Avatar } from "@atoms/Avatar/Avatar";
import styles from "./personalData.module.scss";

const informationOrder: [
  label: string,
  key: keyof Omit<PersonalDataType, "avatar">,
  transformationFunction?: (value?: string) => string
][] = [
  ["First Name", "firstName"],
  ["Last Name", "lastName"],
  ["Email", "email"],
  ["Phone", "phone"],
  [
    "Birthday",
    "birthday",
    (v = "") => format(parseDateString(v), "dd.MM.yyyy"),
  ],
  ["About", "about"],
];

export const PersonalData = () => {
  const storedData = SessionStorage.getRecord<PersonalDataType>(
    storageKeys.PERSONAL_DATA
  );

  if (storedData == null) {
    return <NoData />;
  }

  return (
    <div className={styles.personalData}>
      <div>
        <Avatar encodedImage={storedData.avatar?.encodedFile} />
      </div>
      <div className={styles.informationEntries}>
        {informationOrder.map(
          ([label, key, transformationFunction = (e) => e]) => (
            <InformationEntry
              key={label}
              label={label}
              value={transformationFunction(storedData[key])}
            />
          )
        )}
      </div>
    </div>
  );
};
