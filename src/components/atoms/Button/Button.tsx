import styles from "./button.module.scss";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  title: string;
};

export const Button = ({ onClick, title, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {title}
    </button>
  );
};
