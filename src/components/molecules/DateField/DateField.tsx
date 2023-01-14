import { BasicFieldProps, FormField } from "@atoms/FormField/FormField";

export const DateField = ({ name, label, ...props }: BasicFieldProps) => {
  return <FormField {...props} name={name} type={"date"} label={label} />;
};
