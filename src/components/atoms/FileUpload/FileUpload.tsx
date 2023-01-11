import { FocusEvent, ChangeEvent } from "react";
import { useField } from "formik";

interface FileUploadProps {
  name: string;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  accept?: string;
}

export const FileUpload = (props: FileUploadProps) => {
  const [, , { setValue }] = useField(props.name);

  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const [file] = event.target.files;
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setValue(
            {
              encodedFile: e.target?.result,
              fileSize: file.size,
            },
            true
          );
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <input
      type={"file"}
      name={props.name}
      onBlur={props.onBlur}
      onChange={onFileUpload}
      accept={props.accept}
    />
  );
};
