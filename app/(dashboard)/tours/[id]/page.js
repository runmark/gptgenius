import TourInfo from "@/components/TourInfo";
import { generateTourImage, getTourById } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import axios from 'axios';
const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=`;

const SingleTourPage = async ({ params }) => {

    const tour = await getTourById(params.id);
    if (!tour) {
        redirect('/tours');
    }

    // const tourImage = await generateTourImage({
    //     city: tour.city,
    //     country: tour.country,
    // });

    const { data } = await axios(`${url}${tour.city}`);
    const tourImage = data?.results[0]?.urls?.raw;

    return (
        <div>
            <Link href="/tours" className="btn btn-secondary mb-12">Back to tours</Link>

            {
                tourImage && (
                    <Image src={tourImage}
                        className="rounded-xl"
                        width={300}
                        height={300}
                        alt={tour.title}
                        priority
                    />
                )
            }

            <TourInfo tour={tour} />
        </div>
    );
}

export default SingleTourPage;