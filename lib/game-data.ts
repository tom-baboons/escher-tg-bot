export type ImageQuestion = {
  imageUrl: string;
  correctAnswer: string;
  options: string[];
};

export const questions: ImageQuestion[] = [
  {
    imageUrl:
      "https://app.escher.ai/_next/image?url=https%3A%2F%2Fringfence-prod-s3.s3.amazonaws.com%2Fimages%2Fgenerated%2F35939e96-152d-48fa-9a59-9770b89685b1.jpg&w=640&q=75",
    correctAnswer: "Midjourney",
    options: ["DALL-E", "Midjourney", "Stable Diffusion", "Leonardo AI"],
  },
  {
    imageUrl:
      "https://app.escher.ai/_next/image?url=https%3A%2F%2Fringfence-prod-s3.s3.amazonaws.com%2Fimages%2Fgenerated%2F32fc4870-1e7d-4988-9525-b52130a1cf4b.jpg&w=828&q=75",
    correctAnswer: "DALL-E",
    options: ["DALL-E", "Stable Diffusion", "Midjourney", "Leonardo AI"],
  },
  {
    imageUrl:
      "https://app.escher.ai/_next/image?url=https%3A%2F%2Fringfence-prod-s3.s3.amazonaws.com%2Fimages%2Fgenerated%2F45a2d66c-71ef-4ab2-9427-c7420ac7da43.jpg&w=2048&q=75",
    correctAnswer: "Stable Diffusion",
    options: ["Leonardo AI", "DALL-E", "Stable Diffusion", "Midjourney"],
  },
  {
    imageUrl: "https://www.vn.nl/wp-content/uploads/2017/11/Bean.jpg",
    correctAnswer: "Leonardo AI",
    options: ["Midjourney", "Leonardo AI", "DALL-E", "Stable Diffusion"],
  },
];
