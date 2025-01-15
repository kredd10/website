export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Adversarial Attack on Local LLMs (LARF)",
    year: 2024,
    description:
      "Developed the Local Adversarial Refinement Framework (LARF) to identify vulnerabilities in 16 local LLMs, including Lllama2, SmoLLM and Deepseek-V2, using models like GPT-4 and Llama-2 for attack and evaluation, improving safety in Generative AI.",
    url: "https://github.com/kredd10/JailbreakingLLMs",
  },
  {
    title: "Tracking Template Face Mesh",
    year: 2023,
    description:
      "Designed and implemented a pipeline integrating Google MediaPipe with game engine functionalities, achieving sub-2-second latency from input capture to display for real-time, AI-driven 3D facial motion capture across multiple subjects.",
    url: "https://drive.google.com/file/d/1vCJ0_mewhgfF8m9jApNxOuAsxBaK3wl7/view?usp=sharing",
  },
  {
    title: "Literature Survey on Tracking Template Face Mesh Using Stereo Video",
    year: 2023,
    description:
      "Researched and evaluated 2D and 3D facial motion capture techniques, identifying limitations and proposing solutions to enable real-time, accessible applications in public settings.",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003363781-48/literature-survey-tracking-template-face-mesh-using-stereo-video-kavitha-jayaram-ameer-suhail-aneesh-acharya-manish-reddy-mohammed-raheel",
  },
];