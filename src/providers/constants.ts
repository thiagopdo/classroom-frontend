import { Subject } from "@/types";
export const API_URL = "https://api.fake-rest.refine.dev";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Algorithms",
    department: "Computer Science",
    description:
      "A foundational course covering sorting, searching, and graph algorithms, with an emphasis on time complexity and big-O notation.",
    createdAt: new Date(),
  },
  {
    id: 2,
    code: "PSY240",
    name: "Cognitive Psychology",
    department: "Psychology",
    description:
      "An exploration of mental processes such as attention, language use, memory, perception, problem-solving, creativity, and thinking.",
    createdAt: new Date(),
  },
  {
    id: 3,
    code: "ART305",
    name: "Renaissance Art & Architecture",
    department: "Art History",
    description:
      "A survey of the major artistic movements in Italy and Northern Europe from the 14th to the 16th centuries, focusing on key figures like Da Vinci and Michelangelo.",
    createdAt: new Date(),
  },
];
