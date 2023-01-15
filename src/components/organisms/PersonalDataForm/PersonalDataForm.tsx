import { Form, Formik } from "formik";
import "yup-phone-lite";
import { Button } from "@atoms/Button/Button";
import { storageKeys } from "@constants/storageKeys";
import { SessionStorage } from "@utils/sessionStorage";
import styles from "./personalDataForm.module.scss";
import { useRouter } from "next/router";
import {
  getInitialData,
  isFieldRequired,
} from "@organisms/PersonalDataForm/PersonalDataForm.helpers";
import {
  formFields,
  validationSchema,
} from "@organisms/PersonalDataForm/PersonalDataForm.constants";

interface PersonalDataFormProps {}

export const PersonalDataForm = ({}: PersonalDataFormProps) => {
  const router = useRouter();

  return (
    <Formik
      initialValues={getInitialData()}
      onSubmit={(values) => {
        SessionStorage.saveRecord(storageKeys.PERSONAL_DATA, values);
        router.push("/profile");
      }}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={false}
    >
      <Form className={styles.form}>
        {formFields.map(({ name, label, Component }) => (
          <Component
            key={name}
            name={name}
            label={label}
            isRequired={isFieldRequired(name)}
          />
        ))}
        <Button type={"submit"} title={"Submit!"} />
      </Form>
    </Formik>
  );
};
