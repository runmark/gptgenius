'use client';

import { createNewTour, generateTourResponse, getExistingTour } from "@/utils/actions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import TourInfo from "./TourInfo";

const NewTour = () => {

    const queryClient = useQueryClient();

    const { mutate, isPending, data: tour } = useMutation({
        mutationFn: async (destination) => {

            const existingTour = await getExistingTour(destination);
            console.log(existingTour);
            if (existingTour) return existingTour;

            const newTour = await generateTourResponse(destination);
            if (newTour) {
                // console.log("in client: ", newTour);
                await createNewTour(newTour);
                queryClient.invalidateQueries({ queryKey: ['tours'] });
                return newTour;
            }

            toast.error('no matching city found...');
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        // console.log("---------: ", destination);

        mutate(destination);
    };

    if (isPending) {
        return <span className="loading loading-lg"></span>;
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-2xl">
                <h2 className="mb-4">Select your dream destination</h2>
                <div className="join w-full">
                    <input type="text" placeholder="city" name="city"
                        className="input input-bordered join-item w-full"
                        required
                    ></input>
                    <input type="text" placeholder="country" name="country"
                        className="input input-bordered join-item w-full"
                        required
                    ></input>
                    <button type="submit" className="button btn-primary join-item" disabled={isPending}>
                        {isPending ? 'please wait...' : 'generate tour'}
                    </button>
                </div>
            </form>

            <div className="mt-16">
                <div className="mt-16">
                    {tour ? <TourInfo tour={tour} /> : null}
                </div>
            </div>
        </>
    );
}

export default NewTour;