export interface Personal {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  social: {
    linkedin: string;
    github: string;
    bento: string;
    twitter: string;
    instagram: string;
  };
}

export interface About {
  description: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  faculty: string;
  period: string;
}

export interface Experience {
  title: string;
  period: string;
  responsibilities: string[];
}

export interface PortfolioData {
  personal: Personal;
  about: About;
  services: Service[];
  education: Education[];
  experience: Experience[];
  skills: string[];
}
