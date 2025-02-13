import "./layout.styles.scss";
import { LayoutProp } from "@/enteties/layout/layout.type";

export const Layout = ({ children }: LayoutProp) => {
  return <div className="layout-container">{children}</div>;
};
