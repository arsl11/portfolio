interface Technology {
  name: string;
  icon: string;
}

interface Feedback {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface Status {
  name: string;
  color: string;
}

interface Tag {
  name: string;
  color: string;
}
interface Project {
  name: string;
  description: string;
  statuses: Array<Status>;
  tags: Array<Tag>;
  image: string;
  source_code_link: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: Array<string>;
}

interface Service {
  title: string;
  icon: string;
}

export type { Technology, Feedback, Project, Experience, Service };
