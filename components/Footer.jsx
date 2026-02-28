import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:hashirabdullah46@gmail.com", label: "Email" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/muhammad-hashir-abdullah2",
    label: "LinkedIn",
  },
  {
    icon: Github,
    href: "https://github.com/MHashirAbdullah",
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Muhammad Hashir Abdullah. Handcrafted
          with passion and zero sleep.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="text-slate-400 hover:text-primary transition-colors duration-200"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
