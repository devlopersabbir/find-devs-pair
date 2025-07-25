export const devs = [
  {
    id: "dev-01",
    name: "Alice Johnson",
    age: 29,
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=512&q=80",
    title: "Frontend Engineer @ Google",
    about:
      "Passionate frontend engineer with 6 years of experience in building scalable web apps using React, Next.js, and TypeScript...",
    interests: [
      "Accessibility advocate",
      "Loves performance optimization",
      "CSS wizard",
      "Open Source Contributor",
    ],
  },
  {
    id: "dev-02",
    name: "Bob Martinez",
    age: 33,
    image:
      "https://images.unsplash.com/photo-1614284439051-d78b6a1a6e16?auto=format&fit=crop&w=512&q=80",
    title: "Mobile Developer @ Meta",
    about:
      "React Native & Flutter expert with a knack for building fluid UIs. 4 years at Meta working on Instagram Reels.",
    interests: [
      "Animations lover",
      "Core Reanimated contributor",
      "Mentors junior devs",
    ],
  },
  {
    id: "dev-03",
    name: "Chioma Okafor",
    age: 31,
    image:
      "https://images.unsplash.com/photo-1614273071094-ef30b3fd877c?auto=format&fit=crop&w=512&q=80",
    title: "Full Stack Dev @ Stripe",
    about:
      "Polyglot engineer with a background in both DevOps and product. Fluent in Go, Python, and React.",
    interests: [
      "Runs a tech blog",
      "Public speaker",
      "Hackathon winner",
      "Stripe API master",
    ],
  },
  {
    id: "dev-04",
    name: "David Kim",
    age: 35,
    image:
      "https://images.unsplash.com/photo-1502764613149-7f1d229e2300?auto=format&fit=crop&w=512&q=80",
    title: "Systems Engineer @ Netflix",
    about:
      "Low-latency systems engineer focusing on streaming pipelines and optimization for scale.",
    interests: [
      "Rust enthusiast",
      "Distributed systems",
      "Writes clean architecture",
      "Kafka & K8s fan",
    ],
  },
  {
    id: "dev-05",
    name: "Emily Zhang",
    age: 27,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=512&q=80",
    title: "UI Designer + Developer @ Figma",
    about:
      "Blending design and code for delightful user experiences. Works at the intersection of product and dev.",
    interests: [
      "Design systems",
      "Loves Figma plugins",
      "React Native Sketch",
      "Dark mode champion",
    ],
  },
];

export type Devs = (typeof devs)[number];
