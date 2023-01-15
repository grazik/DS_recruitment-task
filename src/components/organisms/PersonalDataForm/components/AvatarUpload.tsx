import { FileUploadField } from "@molecules/FileUploadField/FileUploadField";
import { BasicFieldProps } from "@atoms/FormField/FormField";
import { useField } from "formik";
import { Avatar } from "@atoms/Avatar/Avatar";
import { Button } from "@atoms/Button/Button";
import { formDefaultData } from "../PersonalDataForm.constants";
import styles from "../personalDataForm.module.scss";

export const AvatarUpload = ({ name, ...rest }: BasicFieldProps) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <div className={styles.avatarUpload}>
      <FileUploadField {...rest} name={name} />
      <Avatar encodedImage={value.encodedFile} />
      <Button
        type={"button"}
        onClick={() => setValue(formDefaultData["avatar"])}
        title="Clear image"
      />
    </div>
  );
};
