import styles from "./heroBanner.module.scss";
import Image, { ImageProps } from "next/image";
import { ReactElement } from "react";

interface HeroBannerProps {
  image: ImageProps;
  title?: string;
  subtitle?: string;
  children?: ReactElement;
  isFullHeight?: boolean;
}

export const HeroBanner = ({
  image,
  title,
  subtitle,
  children,
  isFullHeight,
}: HeroBannerProps) => {
  return (
    <section
      className={`${styles.heroBanner} ${
        isFullHeight ? styles.fullHeight : ""
      }`}
      {...(!!title ? { "aria-labelledby": "heroBanner-title" } : {})}
    >
      <Image src={image.src} alt={image.alt} fill={true} />
      <div className={styles.contentWrapper}>
        {title && (
          <h1 className={styles.title} id={"heroBanner-title"}>
            {title}
          </h1>
        )}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};
