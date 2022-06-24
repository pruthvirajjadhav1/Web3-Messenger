import Image from "next/image";
import { useMoralis } from "react-moralis";
import profilePic from "../img/logo.jpg";
import background from "../img/background.jpg";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>I am the Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full "
          src={profilePic}
          height={200}
          width={200}
        />
        <p></p>
        <br></br>
        <button
          onClick={authenticate}
          className="bg-yellow-50 rounded-lg p-4 font-bold animate-pulse"
        >
          Login Here
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={background} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
