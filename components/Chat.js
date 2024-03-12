'use client';

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const Chat = () => {

    // const [messages, setMessages] = useState([]);
    // const [text, setText] = useState('');

    // const { mutate } = useMutation({
    //     mutationFn: (message) => generateChatResponse(message),
    // });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     mutate(text);
    // };

    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const { mutate } = useMutation({
        mutationFn: (message) => generateChatResponse(message),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutate(text);
    };

};

export default Chat;