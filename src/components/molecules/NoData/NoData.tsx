import { LinkCta } from "@atoms/LinkCta/LinkCta";
import styles from "./noData.module.scss";

export const NoData = ({}) => {
  return (
    <div className={styles.noData}>
      <p>
        You haven&apos;t provided your data, yet. Please do that in the Form
      </p>
      <LinkCta href={"/form"} title={"Form"} />
    </div>
  );
};
