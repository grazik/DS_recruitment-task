import { FormField } from "@atoms/FormField/FormField";

interface DateFieldProps {
  name: string;
  label?: string;
}

export const DateField = ({ name, label }: DateFieldProps) => {
  return <FormField name={name} type={"date"} label={label} />;
};
