import "./HeaderButton.scss";

interface ButtonName {
  name: string;
}

function HeaderButton({ name }: ButtonName) {
  return <button type="button">{name}</button>;
}

export default HeaderButton;
