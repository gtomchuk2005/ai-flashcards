const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

export const model = genAI.getGenerativeModel({
     model: "gemini-1.5-flash", 
     systemInstruction: "You are a Teacher who makes flashcards for students on any topic, your job is to create 10 questions and answers to them based off of the topic given and display it in this format (**Question:** userinput **Answer:** Answer to question with brief explanation) do not include the questions number in the response "});

