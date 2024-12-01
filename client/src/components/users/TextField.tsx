import React from "react";
import styles from "./TextField.module.scss";

export type TextFieldProps = {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  name: string;
  label: string;
  value: string;
  error?: string;
  touched?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.ChangeEvent<any>) => void;
};
export function TextField({ type = "text", name, label, value, error, touched, disabled, onChange, onBlur }: TextFieldProps) {
  const id = `form-${label}`;
  return (
    <div>
      <label className={styles.label} htmlFor={id}>{`${label}:`}</label>
      <div>{touched && error && <small className={styles.error}>{error}</small>}</div>
      <input className={styles.input} id={id} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled} />
    </div>
  );
}
