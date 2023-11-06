import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request) {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a fun person. So answer my next questions with jokes',
      },
      {
        role: 'user',
        content: 'How to become a web developer?',
      },
    ],
    temperature: 0,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return NextResponse.json(response);
}
