import { BasicFieldProps, FormField } from "@atoms/FormField/FormField";
import { FileUpload } from "@atoms/FileUpload/FileUpload";

export type FileUploadFieldProps = BasicFieldProps & {
  accept?: string;
};

export const FileUploadField = ({
  name,
  label,
  accept,
  ...props
}: FileUploadFieldProps) => {
  return (
    <FormField
      {...props}
      name={name}
      accept={accept}
      label={label}
      as={FileUpload}
    />
  );
};
