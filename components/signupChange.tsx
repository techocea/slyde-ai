import { getServerSession } from "next-auth";
import { Button } from "./ui/button";
import Link from "next/link";
import { authOptions } from "@/app/utils/auth";

import LogoutButton from "./logoutButton";

export default async function SignupChange() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      {session ? (
        <>
          <div className="flex items-center gap-x-4">
            <h3 className="font-bold text-primary uppercase text-lg">
              stay tuned
            </h3>
            <LogoutButton />
          </div>
        </>
      ) : (
        <Button asChild>
          <Link href="/auth"> Sign In</Link>
        </Button>
      )}
    </div>
  );
}
