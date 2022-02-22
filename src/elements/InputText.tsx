/* eslint-disable react/no-unused-prop-types */

import { ChangeEventHandler } from "react";

/* eslint-disable react/require-default-props */
interface Input {
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEvent;
}

function InputText({ type, name, id, value, onChange, onClick }: Input) {
  return <input type={type} name={name} id={id} value={value} onChange={onChange} onClick={onClick} />;
}

export default InputText;
