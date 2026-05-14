import type { IconType } from "react-icons";

export default interface WorkAttributes {
  role: string;
  location: string;
  company: string;
  start: Date;
  end: Date;
  description: string[];
  technologies?: Technology[];
  opinion?: string;
}

export interface Technology {
  name: string;
  icon: IconType;
}
