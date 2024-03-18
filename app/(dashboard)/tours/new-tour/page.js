import NewTour from "@/components/NewTour";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

const NewTourPage = () => {

    const queryClient = new QueryClient();

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NewTour />
            </HydrationBoundary>
        </div>
    );
}

export default NewTourPage;