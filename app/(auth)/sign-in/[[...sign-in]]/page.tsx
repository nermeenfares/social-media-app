import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-6">
        <SignIn />
      </div>
    </div>
  );
}
