import styles from "./styles.module.scss";
import AvatarPlaceholder from "@public/avatar.png";
import Image from "next/image";

interface AvatarProps {
  encodedImage?: string;
}

export const Avatar = ({ encodedImage }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <Image
        fill={true}
        src={encodedImage || AvatarPlaceholder}
        alt={"Avatar"}
      />
    </div>
  );
};
