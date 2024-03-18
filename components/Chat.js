'use client';

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {

    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const { mutate, isPending } = useMutation({
        mutationFn: (query) => generateChatResponse([...messages, query]),
        onSuccess: (data) => {
            if (!data) {
                toast.error('Something went wrong...');
                return;
            }
            setMessages((prev) => [...prev, data]);
            // console.log(data, "   in muteate");
            // console.log(messages, "  in  mutate");
        },
        onError: (error) => {
            toast.error('Something went wrong...');
            // toast.error(error);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // 其实可直接使用：generateChatResponse(text);
        // 为什么要套一层 react query？
        // 为了使用缓存等能力
        const query = { role: 'user', content: text };
        mutate(query);
        setMessages((prev) => [...prev, query]);
        setText("");
        // console.log(messages, "  in  handlesubmit");
    };

    return (
        <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
            <div>
                <h2 className="text-5xl">messages</h2>
            </div>

            <div>
                {messages.map(({ role, content }, index) => {
                    const avatar = role === 'user' ? '👤' : '🤖';
                    const bcg = role === 'user' ? 'bg-base-200' : 'bg-base-100';
                    return (
                        <div key={index}
                            className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b boer-base-300`}
                        >
                            <span className="mr-4">{avatar}</span>
                            <p className="max-w-3xl">{content}</p>
                        </div>
                    );
                })}
                {isPending && <span className="loading"></span>}
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
                <div className="join w-full">
                    <input className="join-item w-full input input-bordered"
                        type="text"
                        placeholder="Message GeniusGPT"
                        value={text}
                        required
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button className="btn btn-primary join-item" type="submit" disabled={isPending}>
                        {isPending ? 'please wait' : 'ask question'}
                    </button>
                </div>
            </form>
        </div>
    );

};

export default Chat;