"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi= new  GoogleGenerativeAI(`AIzaSyBJb908BK4bewRGfOECrkDTXTo6o0BWNBw`);

 export async function postAi(params:string){
    
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(params);
    const reply = result.response.text();
    return reply;
}