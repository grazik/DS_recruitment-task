import { Form, Formik } from "formik";
import { TextField } from "@molecules/TextField/TextField";
import { EmailField } from "@molecules/EmailField/EmailField";
import * as Yup from "yup";
import "yup-phone-lite";
import { DateField } from "@molecules/DateField/DateField";
import { TextArea } from "@molecules/TextArea/TextArea";
import { FileUploadField } from "@molecules/FileUploadField/FileUploadField";
import { Button } from "@atoms/Button/Button";
import { storageKeys } from "../../../constants/storageKeys";
import { SessionStorage } from "../../../utils/sessionStorage";

interface PersonalDataFormProps {}

const defaultData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthday: "",
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

const getInitialData = () => {
  const data = SessionStorage.getRecord(storageKeys.PERSONAL_DATA);

  const storedData = !!data ? JSON.parse(data) : {};

  return {
    ...defaultData,
    ...storedData,
  };
};

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
      <Form>
        <TextField name={"firstName"} label={"First Name"} />
        <TextField name={"lastName"} label={"Last Name"} />
        <EmailField name={"email"} label={"Email"} />
        <TextField name={"phone"} label={"Phone"} />
        <DateField name={"birthday"} label={"Birthday"} />
        <TextArea name={"about"} label={"About"} />
        <FileUploadField name={"avatar"} label={"Avatar"} accept={"image/*"} />
        <Button type={"submit"} title={"Submit!"} />
      </Form>
    </Formik>
  );
};
