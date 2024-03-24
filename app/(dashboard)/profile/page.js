import { fetchOrGenerateTokens } from "@/utils/actions";
import { UserProfile, auth } from "@clerk/nextjs";

const ProfilePage = async () => {

    const { userId } = auth();
    console.log("userId: ", userId);

    const currentTokens = await fetchOrGenerateTokens(userId);
    console.log("currentTokens: ", currentTokens);

    return (
        <>
            <h2 className="mb-8 ml-8 text-xl font-extrabold">Token Amount: {currentTokens}</h2>
            <UserProfile />
        </>
    );
}

export default ProfilePage;