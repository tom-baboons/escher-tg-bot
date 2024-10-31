export type ImageQuestion = {
  imageUrl: string;
  correctAnswer: string;
  options: string[];
};

export const questions: ImageQuestion[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1704923095544-5e8fe53b7c5f",
    correctAnswer: "Midjourney",
    options: ["DALL-E", "Midjourney", "Stable Diffusion", "Leonardo AI"]
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1705374814654-3b3315952e40",
    correctAnswer: "DALL-E",
    options: ["DALL-E", "Stable Diffusion", "Midjourney", "Leonardo AI"]
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1705277681866-6a58c9ad49b7",
    correctAnswer: "Stable Diffusion",
    options: ["Leonardo AI", "DALL-E", "Stable Diffusion", "Midjourney"]
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1705467705753-5f5b33e2c0ac",
    correctAnswer: "Leonardo AI",
    options: ["Midjourney", "Leonardo AI", "DALL-E", "Stable Diffusion"]
  }
];