import { FormField } from "@atoms/FormField/FormField";
import { FileUpload } from "@atoms/FileUpload/FileUpload";

interface FileUploadFieldProps {
  name: string;
  label?: string;
  accept?: string;
}

export const FileUploadField = ({
  name,
  label,
  accept,
}: FileUploadFieldProps) => {
  return (
    <FormField name={name} accept={accept} label={label} as={FileUpload} />
  );
};
