import Chat from "@/components/Chat";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const ChatPage = async () => {

    const queryClient = new QueryClient();

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Chat />
            </HydrationBoundary>
        </div>
    );
}

export default ChatPage;