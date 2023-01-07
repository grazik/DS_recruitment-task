import styles from "./linkCta.module.scss";
import Link from "next/link";

interface LinkCtaProps {
  href: string;
  title: string;
}

export const LinkCta = ({ href, title }: LinkCtaProps) => {
  return (
    <Link href={href} className={styles.linkCta}>
      {title}
    </Link>
  );
};
