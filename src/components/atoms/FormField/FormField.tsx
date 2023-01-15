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
      <label className={classNames(styles.label)} htmlFor={`form-${name}`}>
        {label ?? name}
        {isRequired && (
          <>
            <span className={styles.required} aria-hidden={"true"}>
              *
            </span>
            <span className="sr-only"> - required</span>
          </>
        )}
      </label>
      {isInputProps(props) ? (
        <Field
          name={name}
          className={classNames(styles.input, className)}
          type={props.type}
          aria-describedby={`form-${name}-error`}
          id={`form-${name}`}
          {...rest}
        />
      ) : (
        <Field
          {...rest}
          aria-describedby={`form-${name}-error`}
          id={`form-${name}`}
          className={classNames(styles.input, className)}
          name={name}
          as={props.as}
        />
      )}
      <ErrorMessage
        name={name}
        render={(errorMessage) => (
          <span id={`form-${name}-error`} className={styles.error}>
            {errorMessage}
          </span>
        )}
      />
    </div>
  );
};
