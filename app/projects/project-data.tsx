export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export interface Publication {
  authors: string;
  title: string;
  conference: string;
  year: number;
  location: string;
  publisher: string;
  url: string;
}

export const publications: Publication[] = [
  {
    authors: "Reddy, M. K., Kavitha, J., Suhail, M. A., Acharya, A., & Raheel, M.",
    title: "Literature survey on tracking template face mesh using stereo video",
    conference: "Recent Trends in Computational Sciences: Proceedings of the Fourth Annual International Conference on Data Science, Machine Learning and Blockchain Technology (AICDMB 2023)",
    year: 2023,
    location: "Mysuru, India, 16–17 March 2023 (1st ed.)",
    publisher: "Taylor & Francis - CRC Press",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003363781-48/literature-survey-tracking-template-face-mesh-using-stereo-video-kavitha-jayaram-ameer-suhail-aneesh-acharya-manish-reddy-mohammed-raheel"
  }
];

export const projects: Project[] = [
  {
    title: "Kaplan Finance Storytelling (KapFiS)",
    year: 2025,
    description: "Pioneered KapFiS, an interactive AI Financial Storytelling coach, leveraging LangGraph and Gemini API. This innovative solution empowers startups to craft compelling financial narratives, integrating advanced database management, strategic few-shot prompting, and sophisticated agentic behaviors to enhance business communication and secure funding.",
    url: "https://www.kaggle.com/code/manishkreddy/kapfis-financial-story-coach"
  },
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

];
