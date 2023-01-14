import { BasicFieldProps, FormField } from "@atoms/FormField/FormField";

export const TextField = ({ name, label, ...props }: BasicFieldProps) => {
  return <FormField name={name} type={"text"} label={label} {...props} />;
};
