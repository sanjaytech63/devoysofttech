export type SocialLink = {
  label: string;
  href: string;
  image: string;
};

export type FooterConfig = {
  name: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  services: string[];
  company: string[];
  social: SocialLink[];
};
