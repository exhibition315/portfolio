export type SkillItem = {
  category: string;
  list: string[];
};

export type ExperienceItem = {
  time: string;
  title: string;
  details: string[];
};

export type ProjectItem = {
  name: string;
  desc: string;
  demo?: string;
  code?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  desc?: string;
};

export type ResumeData = {
  about: string;
  skills: SkillItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  name?: string;
  title?: string;
  location?: string;
  email?: string;
  phone?: string;
};
