import { StaticImageData } from "next/image";

export interface RolesData {
  position: string;
  description: string;
  start_date: string;
  end_date: string;
  tech_stack?: string[];
}

export interface ExperienceDataType {
  id: string;
  start_date: string;
  end_date: string;
  company_name: string;
  cert_link?: string;
  mode: string;
  roles?: RolesData[];
}

export interface ProjectDataType {
  id: string;
  title: string;
  deployed_link?: string;
  github_url?: string;
  image_url?: StaticImageData;
  description: string;
  tech_stack?: string[];
}
