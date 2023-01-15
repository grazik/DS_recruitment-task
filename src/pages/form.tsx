import { PersonalDataForm } from "@organisms/PersonalDataForm/PersonalDataForm";
import classNames from "classnames";
import styles from "@styles/formPage.module.scss";
import { Layout } from "@layouts/Layout";

export default function FormPage() {
  return (
    <Layout title={"Form"}>
      <section className={"wrapper"} aria-labelledby="form-title">
        <h1 className={classNames("title")} id="form-title">
          Form
        </h1>
        <p className={styles.subtitle}>
          Please fill the form with your personal information:
        </p>
        <PersonalDataForm />
      </section>
    </Layout>
  );
}
