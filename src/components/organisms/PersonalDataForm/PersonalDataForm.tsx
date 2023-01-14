import { Form, Formik } from "formik";
import { TextField } from "@molecules/TextField/TextField";
import { EmailField } from "@molecules/EmailField/EmailField";
import * as Yup from "yup";
import "yup-phone-lite";
import { DateField } from "@molecules/DateField/DateField";
import { TextArea } from "@molecules/TextArea/TextArea";
import {
  FileUploadField,
  FileUploadFieldProps,
} from "@molecules/FileUploadField/FileUploadField";
import { Button } from "@atoms/Button/Button";
import { storageKeys } from "@constants/storageKeys";
import { SessionStorage } from "@utils/sessionStorage";
import { PersonalData } from "@typing/PersonalData";
import { BasicFieldProps } from "@atoms/FormField/FormField";
import styles from "./personalDataForm.module.scss";

interface PersonalDataFormProps {}

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthday: "",
  about: "",
  avatar: { encodedFile: "", fileSize: 0 },
} as const;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be at least 3 characters")
    .required("Required!"),
  lastName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(3, "Must be at least 3 characters")
    .required("Required!"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string().phone("PL", "Please enter a valid phone number"),
  birthday: Yup.date()
    .min(new Date("1900-01-01T00:00:00"), "You can't be born before 1900")
    .max(new Date(), "You can't be born in the future")
    .required("Required!"),
  about: Yup.string(),
  avatar: Yup.object()
    .shape({
      encodedFile: Yup.string(),
      fileSize: Yup.number(),
    })
    .test(
      "fileSize",
      "File size mustn't exceed 100kb",
      ({ fileSize = 0 }) => fileSize < 102400
    ),
});

const isFieldRequired = (
  fieldName: keyof Yup.InferType<typeof validationSchema>
) => {
  return validationSchema.fields[fieldName].spec.presence === "required";
};

const getInitialData = () => {
  const storedData =
    SessionStorage.getRecord<PersonalData>(storageKeys.PERSONAL_DATA) ?? {};

  return {
    ...defaultData,
    ...storedData,
  };
};

const fields: {
  name: keyof typeof defaultData;
  label: string;
  Component: (props: BasicFieldProps | FileUploadFieldProps) => JSX.Element;
  props?: Record<string, any>;
}[] = [
  { name: "firstName", label: "First Name", Component: TextField },
  { name: "lastName", label: "Last Name", Component: TextField },
  { name: "email", label: "Email", Component: EmailField },
  { name: "phone", label: "Phone", Component: TextField },
  { name: "birthday", label: "Birthday", Component: DateField },
  { name: "about", label: "About", Component: TextArea },
  {
    name: "avatar",
    label: "Avatar",
    Component: FileUploadField,
    props: { accept: "image/*" },
  },
];

export const PersonalDataForm = ({}: PersonalDataFormProps) => {
  return (
    <Formik
      initialValues={getInitialData()}
      onSubmit={(values) => {
        SessionStorage.saveRecord(storageKeys.PERSONAL_DATA, values);
      }}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={false}
    >
      <Form className={styles.form}>
        {fields.map(({ name, label, Component, props = {} }) => (
          <Component
            {...props}
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
