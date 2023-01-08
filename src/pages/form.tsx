import { PersonalDataForm } from "@organisms/PersonalDataForm/PersonalDataForm";

export default function FormPage() {
  return (
    <section className={"wrapper"} aria-labelledby="form-title">
      <h1 id="form-title">Form</h1>
      <p>Please fill the form with your personal information:</p>
      <PersonalDataForm />
    </section>
  );
}
