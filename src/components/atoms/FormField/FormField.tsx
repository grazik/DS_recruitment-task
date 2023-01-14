import { ErrorMessage, Field } from "formik";
import styles from "./formField.module.scss";
import classNames from "classnames";

export type BasicFieldProps = JSX.IntrinsicElements["input"] & {
  name: string;
  isRequired?: boolean;
  label?: string;
};

interface InputProps extends BasicFieldProps {
  type: JSX.IntrinsicElements["input"]["type"];
}

interface CustomComponentProps extends BasicFieldProps {
  as: Parameters<typeof Field>[0]["as"];
}

type FormFieldProps = InputProps | CustomComponentProps;

const isInputProps = (props: FormFieldProps): props is InputProps =>
  "type" in props;

export const FormField = (props: FormFieldProps) => {
  const { name, label, isRequired = false, className, ...rest } = props;

  return (
    <div className={styles.wrapper}>
      <label
        className={classNames(styles.label, { [styles.required]: isRequired })}
      >
        {label ?? name}
      </label>
      {isInputProps(props) ? (
        <Field
          name={name}
          className={classNames(styles.input, className)}
          type={props.type}
          {...rest}
        />
      ) : (
        <Field
          {...rest}
          className={classNames(styles.input, className)}
          name={name}
          as={props.as}
        />
      )}
      <ErrorMessage name={name} className={styles.error} component={"span"} />
    </div>
  );
};
