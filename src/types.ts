export interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillSet {
  category: string;
  skills: string[];
}
