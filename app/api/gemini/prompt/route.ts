import { NextResponse } from "next/server";
import { geminiModel } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const { platform, userPrompt } = await req.json();

    const prompt = `
    You are an elite direct-response copywriter.

    Your task is to generate a high-converting promotional marketing message which will be sent through ${platform}.

    Inputs:
    User Prompt: ${userPrompt}

    Instructions:

    1. Write a compelling promotional message tailored to the campaign.
    2. Start with a strong attention-grabbing hook.
    3. Highlight clear benefits (not just features).
    4. Match the exact tone specified.
    5. Create urgency or emotional pull when appropriate.
    6. Naturally integrate the CTA at the end.
    7. Make the message concise but powerful.
    8. Do NOT add explanations, notes, or headings.
    9. Output ONLY the final promotional message.
    10. Use emojis when and where required.
    11. Do not use markdown language or HTML, since it cannot be parsed by ${platform}.
    12. Use only the userPrompt provided, and use placeholders [] wherever information is required.
    13. Follow the instructions given strictly, without deviating or hallucinating.

    The message should feel modern, persuasive, and ready to publish.
    `;
    
    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;

    return NextResponse.json({
      text: response.text(),
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}