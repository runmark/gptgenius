import { SignIn } from "@clerk/nextjs";
// import { FaBeer } from 'react-icons/fa';

const SignInPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            {/* <FaBeer /> */}
            <SignIn></SignIn>
        </div>
    );
}

export default SignInPage;