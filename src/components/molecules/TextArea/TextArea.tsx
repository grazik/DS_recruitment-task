import { BasicFieldProps, FormField } from "@atoms/FormField/FormField";
import styles from "./textArea.module.scss";

export const TextArea = ({ name, label, ...props }: BasicFieldProps) => {
  return (
    <FormField
      {...props}
      name={name}
      label={label}
      as={"textarea"}
      className={styles.textArea}
    />
  );
};
