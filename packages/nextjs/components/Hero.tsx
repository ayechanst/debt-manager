import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();
  function handleClick() {
    router.push("./home");
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">iGUB</h1>
          <p className="py-6">
            Short for "I'll get you back", iGUB is a decentralized application for keeping track of debt among friends!
          </p>
          <button onClick={handleClick} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
