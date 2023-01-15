import styles from "./InformationEntry.module.scss";

interface InformationEntryProps {
  label: string;
  value?: string;
}

export const InformationEntry = ({ label, value }: InformationEntryProps) => {
  return (
    <div className={styles.informationEntry}>
      <p className={styles.label}>{label}:</p>
      <p className={styles.value}>{value || "N/A"}</p>
    </div>
  );
};
