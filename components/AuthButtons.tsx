"use client";
import { LogOutIcon, LogInIcon } from "lucide-react";
import { signOut, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOut({
          callbackUrl: "/",
        });
      }}
      className="flex items-center gap-1 cursor-pointer px-2 py-1.5 text-sm hover:bg-red-400 bg-red-300 w-full rounded-lg "
    >
      Logout <LogOutIcon className="h-4" />
    </button>
  );
}

function LoginButton() {
  return (
    <Button
      onClick={() => {
        signIn(undefined, { callbackUrl: "/" });
      }}
      className="text-lg"
    >
      Login <LogInIcon />
    </Button>
  );
}

export default LoginButton;
