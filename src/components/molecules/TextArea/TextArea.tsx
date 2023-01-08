import { FormField } from "@atoms/FormField/FormField";

interface TextAreaProps {
  name: string;
  label?: string;
}

export const TextArea = ({ name, label }: TextAreaProps) => {
  return <FormField name={name} as={"textarea"} />;
};
