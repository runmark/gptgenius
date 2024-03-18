'use server';

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    basePath: process.env.OPENAI_BASE_PATH,
    apiHost: process.env.OPENAI_BASE_PATH,
    apiBase: process.env.OPENAI_BASE_PATH
});

export const generateChatResponse = async (chatMessages) => {

    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a helpful assistant' },
                ...chatMessages
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        });

        console.log(response.choices[0].message);
        return response.choices[0].message;
    } catch (error) {
        console.log(error);
        return;
    }
};

export const generateTourResponse = async ({ city, country }) => {

    const query = "";

    const response = await openai.chat.completions.create({
        messages: [],
        model: 'gpt-3.5-turbo',
        temperature: 0
    });

};
