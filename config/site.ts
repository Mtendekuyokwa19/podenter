export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PodEnter",
  description: "A curated list of charts in malawi",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About",
      href: "/about",
    },
    {
      label: "Sign In",
      href: "/signin",
    },

    {
      label: "Sign Up",
      href: "/signup",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/mtendekuyokwa19",
    twitter: "https://twitter.com/mtende_kuyokwa",
    sponsor: "https://patreon.com/jrgarciadev",
  },

  pages: {
    categories: "/categories",
    alllists: "/all_lists",
  },
};
