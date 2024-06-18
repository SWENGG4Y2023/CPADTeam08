import { GoogleGenerativeAI } from "@google/generative-ai";
import * as FileSystem from "expo-file-system";

const API_KEY = "############";

const genAI = new GoogleGenerativeAI(API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
// function fileToGenerativePart(path, mimeType) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType,
//     },
//   };
// }

async function fileToGenerativePart(path, mimeType) {
  try {
    const data = await FileSystem.readAsStringAsync(path, {
      encoding: FileSystem.EncodingType.Base64,
    });

    return {
      inlineData: {
        data,
        mimeType,
      },
    };
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
}

export default async function run(image, prompt) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  //   const prompt = "What's different between these pictures?";

  const imageParts = [
    await fileToGenerativePart(image, "image/jpg"),
    // fileToGenerativePart("image2.jpeg", "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  test();
  return text;
}

export async function test() {
  const url = "http://localhost:3000";

  const data = await fetch(url);
  const jsonData = await data.json();
  console.log(jsonData);

  // .then((response) => response.json())
  // .then((jsonData) => console.log(jsonData));
}
