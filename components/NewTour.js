'use client';

import { generateTourResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import TourInfo from "./TourInfo";

const NewTour = () => {

    const { mutate, isPending, data: tour } = useMutation({
        mutationFn: async (destination) => {
            const newTour = await generateTourResponse(destination);
            if (newTour) return newTour;

            toast.error('no matching city found...');
            return;
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        console.log(destination);

        mutate(destination);
    };

    if (isPending) {
        return <span className="loading loading-lg"></span>;
    }

    return (
        <div>
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
                    <button type="submit" className="button btn-primary join-item">generate tour</button>
                </div>
            </form>

            <div className="mt-16">
                <TourInfo />
            </div>
        </div>
    );
}

export default NewTour;