export type Role = {
  name: string;
  blurb: string;
};

export const popularRoles: Role[] = [
  { name: "LLM Engineer", blurb: "Fine-tuning, evals & inference at scale" },
  { name: "AI Developer", blurb: "ML-powered features, shipped end to end" },
  { name: "Full-Stack Developer", blurb: "Product engineers across the whole stack" },
  { name: "Back-End Developer", blurb: "APIs, data & distributed systems" },
  { name: "Front-End Developer", blurb: "Fast, accessible, pixel-exact UI" },
  { name: "Mobile App Developer", blurb: "Cross-platform apps users keep" },
  { name: "iOS Developer", blurb: "Native Swift & SwiftUI craftsmanship" },
  { name: "Android Developer", blurb: "Kotlin-first native experiences" },
  { name: "Web Developer", blurb: "Sites & web apps that convert" },
  { name: "Game Developer", blurb: "Unity, Unreal & realtime 3D" },
];

export const emergingRoles: Role[] = [
  { name: "AI Automation Engineer", blurb: "Operations that run themselves" },
  { name: "AI Agent Developer", blurb: "Autonomous, multi-step agent systems" },
  { name: "Workflow Automation Engineer", blurb: "n8n, Zapier & Make at scale" },
  { name: "LangChain Developer", blurb: "Chains, tools & retrieval pipelines" },
  { name: "Forward Deployed Engineer", blurb: "Embedded where your customers are" },
  { name: "Founding Engineer", blurb: "Zero-to-one product builders" },
  { name: "RAG Engineer", blurb: "Vector search & grounded answers" },
  { name: "AI Applications Engineer", blurb: "LLM features in production" },
  { name: "Prompt Engineer", blurb: "Systematic prompt design & evals" },
];

export const allRoles = [...popularRoles, ...emergingRoles];
