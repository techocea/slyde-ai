"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export default function SignupForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function SigninWithEmail() {
    const signinResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signinResult?.ok) {
      return toast({
        title: "Well this did not work...",
        description: "Something went wrong , please try again",
        variant: "destructive",
      });
    }

    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  }
  return (
    <form action={SigninWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="johndoe@example.com"
        />
        <Button type="submit">Sign In</Button>
      </div>
    </form>
  );
}
