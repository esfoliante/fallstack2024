"use client";

import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

import useSession from "@/hooks/useSession";
import { BASE_URL } from "@/services/api";

const LogoutButton: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch(BASE_URL + "/auth/logout", { method: "POST" });
    if (res.status === 200) {
      session.clear();
      router.refresh();
      router.push("/");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex size-full items-center justify-center  fill-white text-xl transition-colors hover:text-primary"
    >
      <BiLogOut />
    </button>
  );
};

export default LogoutButton;
