interface InformationEntryProps {
  label: string;
  value?: string;
}

export const InformationEntry = ({
  label,
  value = "N/A",
}: InformationEntryProps) => {
  return (
    <div>
      <p>{label}:</p>
      <p>{value}</p>
    </div>
  );
};
