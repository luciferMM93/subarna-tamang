export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const certifications = [
  {
    label: "Education",
    value:
      "MSc Cybersecurity Management (Distinction), Ravensbourne University London."
  },
  {
    label: "Certifications",
    value:
      "Pursuing CompTIA Security+ and ISO 27001 Foundation, with CRISC as a longer-term target."
  }
];

export const skillGroups = [
  {
    title: "GRC & Risk",
    skills: [
      "Risk Assessment",
      "Risk Registers",
      "Risk Treatment",
      "Control Design",
      "Heatmaps"
    ]
  },
  {
    title: "Frameworks",
    skills: ["NIST CSF/RMF", "ISO 27001", "COBIT 5", "GDPR", "PCI-DSS"]
  },
  {
    title: "Technical",
    skills: ["Cloud Security (AWS)", "IAM", "Vulnerability Mgmt", "Networking"]
  },
  {
    title: "Tools",
    skills: ["Splunk", "Wireshark", "Kali Linux", "Excel (Risk Reporting)"]
  }
];

export const experience = [
  {
    title: "Front of House",
    company: "AG Hotels Group, London",
    dates: "2025\u2013Apr 2026",
    summary:
      "Identified process gaps and improved internal controls; developed incident-handling skills and maintained security compliance procedures."
  },
  {
    title: "Software Developer Intern",
    company: "Giga Infosoft, Kathmandu",
    dates: "Mar\u2013Jun 2023",
    summary:
      "Implemented RBAC and secure session management across a multi-user ERP; contributed to full SDLC; documented security limitations and recommended improvements."
  },
  {
    title: "ERP Consultant",
    company: "E-Zone International",
    dates: "2020\u20132021",
    summary:
      "Implemented ERP system improving operational efficiency by 20%; managed access control and drove stakeholder alignment."
  }
];

export type Project = {
  title: string;
  badge: string;
  tags: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: "AWS Cloud Risk Assessment",
    badge: "Featured",
    tags: ["ISO 27001", "NIST RMF", "OWASP Top 10", "CIS Controls"],
    bullets: [
      "End-to-end risk assessment of cloud-based web app; mapped 5 assets against CIA triad.",
      "Identified 2 critical risks; all 5 inherent risks reduced to Medium or Low via proposed controls."
    ]
  },
  {
    title: "Cyber Resilience Strategy",
    badge: "MSc Dissertation",
    tags: ["NIST CSF", "COBIT 5"],
    bullets: [
      "Hybrid framework for AG Hotels Group with 6-domain gap analysis across governance, culture, technical controls, incident response, recovery, and alignment.",
      "Prioritised roadmap covering MFA, network segmentation, patch management, and GDPR compliance."
    ]
  },
  {
    title: "Network Security Lab",
    badge: "Lab",
    tags: ["Wireshark", "IDS", "VPN"],
    bullets: [
      "Configured VPNs, firewalls, and IDS for realistic defensive controls.",
      "Analysed network traffic and simulated attack scenarios to validate detection and response."
    ]
  }
];
