import { ReactNode } from "react";
import { LinkProps } from "next/link";

export interface AppLinkProp extends LinkProps {
  children: ReactNode;
}
