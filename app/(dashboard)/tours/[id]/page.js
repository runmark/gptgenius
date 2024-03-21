import TourInfo from "@/components/TourInfo";
import { getTourById } from "@/utils/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const SingleTourPage = async ({ params }) => {

    const tour = await getTourById(params.id);
    if (!tour) {
        redirect('/tours');
    }

    return (
        <div>
            <Link href="/tours" className="btn btn-secondary mb-12">Back to tours</Link>
            <TourInfo tour={tour} />
        </div>
    );
}

export default SingleTourPage;