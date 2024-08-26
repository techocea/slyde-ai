import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignupWithEmail from "@/components/signupWithEmail";
import SignupForm from "@/components/signupForm";

import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            Welcome to SlydeAI
          </CardTitle>
          <CardDescription className="text-center font-semibold">
            Please sign in to join the waitlist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <SignupForm />
            <SignupWithEmail />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
