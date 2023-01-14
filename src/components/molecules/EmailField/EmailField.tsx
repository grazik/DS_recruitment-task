import { BasicFieldProps, FormField } from "@atoms/FormField/FormField";

export const EmailField = ({ name, label, ...props }: BasicFieldProps) => {
  return <FormField {...props} name={name} type={"email"} label={label} />;
};
