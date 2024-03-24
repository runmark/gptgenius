
import { fetchOrGenerateTokens } from '@/utils/actions';
import { UserButton, currentUser, auth } from '@clerk/nextjs';

const MemberProfile = async () => {

    const user = await currentUser();
    // console.log(user.emailAddresses[0].emailAddress);
    console.log("auth(): ", auth());

    const { userId } = auth();
    console.log("userId: ", userId);
    await fetchOrGenerateTokens(userId);

    return (
        <div className='px-4 flex items-center gap-2'>
            <UserButton afterSignOutUrl='/' />
            <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
    );
}

export default MemberProfile;