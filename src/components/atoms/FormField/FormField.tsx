import { ErrorMessage, Field } from "formik";
import styles from "./formField.module.scss";

type BasicProps = JSX.IntrinsicElements["input"] & {
  name: string;
  label?: string;
};
interface InputProps extends BasicProps {
  type: JSX.IntrinsicElements["input"]["type"];
}

interface CustomComponentProps extends BasicProps {
  as: Parameters<typeof Field>[0]["as"];
}

type FormFieldProps = InputProps | CustomComponentProps;

const isInputProps = (props: FormFieldProps): props is InputProps =>
  "type" in props;

export const FormField = (props: FormFieldProps) => {
  const { name, label, ...rest } = props;
  return (
    <div className={styles.wrapper}>
      <label>{label ?? name}</label>
      {isInputProps(props) ? (
        <Field name={name} type={props.type} {...rest} />
      ) : (
        <Field name={name} as={props.as} {...rest} />
      )}
      <ErrorMessage name={name} />
    </div>
  );
};
