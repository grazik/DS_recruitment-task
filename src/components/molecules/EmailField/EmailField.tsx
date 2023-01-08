import { FormField } from "@atoms/FormField/FormField";

interface TextFieldProps {
  name: string;
  label?: string;
}

export const EmailField = ({ name, label }: TextFieldProps) => {
  return <FormField name={name} type={"email"} label={label} />;
};
