import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={"wrapper"}>
        <p>Recruitment task for Dynamic Solutions</p>
        <p>
          Copyright &#169; 2023{" "}
          <span className="bold">QualityBit Michal Graziowski</span>
        </p>
      </div>
    </footer>
  );
};
