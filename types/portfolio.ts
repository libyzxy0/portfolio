export type SkillBadge = {
  name: string;
  badge: string;
};

export type SkillCategories = Record<string, SkillBadge[]>;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
};