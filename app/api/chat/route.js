import { model } from "@/gemini";
import { NextResponse } from "next/server";

let conversationHistory = []

export async function POST(req) {
    
    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
    
    const userinput = await req

    async function run() {
        conversationHistory.push({
            role: 'user',
            parts: [{text : userinput}]
    });

    const chatSession = model.startChat({
        history: conversationHistory,
        generationConfig
    });

    const result = await chatSession.sendMessage(userinput);

    const aiResponse = result.response.text();

    conversationHistory.push({
        role: 'model',
        parts: [{text: aiResponse }]
    });

    return aiResponse;

    }
    const message = await run();

    // making the message a list so we can parce what we need 
    const flashcards = message.split('\n\n')

    

    const flashcard_list = []

    // parsing the questions and answers 
    for (let i = 1; i < flashcards.length; i++) { 
        const questionStart = flashcards[i].indexOf("**Question:**") + "**Question:**".length;
        const answerStart = flashcards[i].indexOf("**Answer:**") + "**Answer:**".length;

        // Extract the question
        const question = flashcards[i].substring(questionStart, flashcards[i].indexOf("\n")).trim();

        // Extract the answer (from the start of the answer marker to the end of the string)
        const answer = flashcards[i].substring(answerStart).trim();
        
        flashcard_list.push({
            Question: question,
            Answer: answer
        });
    }


    const formattedJson = JSON.stringify(flashcard_list, null, 4);



    return flashcard_list

}

