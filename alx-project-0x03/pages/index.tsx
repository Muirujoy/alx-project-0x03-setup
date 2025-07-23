import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageRouteProps } from "@/interface";
import Button from "@/components/common/Button";

export default function Home() {
  const router = useRouter();
  const [pageRoute, setPageRoute] = useState<string>("");

  useEffect(() => {
    setPageRoute(router.pathname);
  }, [router.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Splash App</h1>
      <p className="text-lg text-gray-700 mb-4">Current route: {pageRoute}</p>
      <Button buttonLabel="Go to Posts" buttonBackgroundColor="green" action={() => router.push("/posts")} />
    </div>
  );
}
