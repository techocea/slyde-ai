"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";

export default function signupWithEmail() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
    >
      Login with Google
    </Button>
  );
}
