import "./button.styles.scss";
import { ButtonTypeProp } from "@/shared/button/button.type";

export const Button = ({ children, onClick }: ButtonTypeProp) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
