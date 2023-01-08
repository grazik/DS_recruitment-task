import { FormField } from "@atoms/FormField/FormField";

interface TextFieldProps {
  name: string;
  label?: string;
}

export const TextField = ({ name, label }: TextFieldProps) => {
  return <FormField name={name} type={"text"} label={label} />;
};
