import * as Yup from "yup";
import { SessionStorage } from "@utils/sessionStorage";
import { PersonalData } from "@typing/PersonalData";
import { storageKeys } from "@constants/storageKeys";
import {
  formDefaultData,
  validationSchema,
} from "@organisms/PersonalDataForm/PersonalDataForm.constants";

export const isFieldRequired = (
  fieldName: keyof Yup.InferType<typeof validationSchema>
) => {
  return validationSchema.fields[fieldName].spec.presence === "required";
};

export const getInitialData = () => {
  const storedData =
    SessionStorage.getRecord<PersonalData>(storageKeys.PERSONAL_DATA) ?? {};

  return {
    ...formDefaultData,
    ...storedData,
  };
};
