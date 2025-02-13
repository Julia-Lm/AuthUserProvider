import Link from "next/link";
import "./app-link.styles.scss";
import { AppLinkProp } from "@/shared/app-link/aapp-link.type";

export const AppLink = ({ children, ...prop }: AppLinkProp) => {
  return (
    <Link {...prop} className="app-link">
      {children}
    </Link>
  );
};
