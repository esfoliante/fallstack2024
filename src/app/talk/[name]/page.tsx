import React from "react";

import { BASE_URL } from "@/services/api";
import getServerSession from "@/services/getServerSession";
import PrimaryButton from "@/components/PrimaryButton";
import TalkQrCodeData from "@/components/TalkQrCodeData";

import Custom404 from "../../not-found";

interface TalkParams {
  params: {
    name: string;
  };
}

const Talk: React.FC<TalkParams> = async ({ params }) => {
  const session = await getServerSession();

  if (!session || !session.isAdmin) {
    return Custom404();
  }

  const { name } = await params;
  const res = await fetch(BASE_URL + `/talk/${name}`);
  const { talk } = await res.json();

  if (!talk) {
    return Custom404();
  }

  const handleToggleIsTalkLive = async () => {
    await fetch(`/api/talk/${name}`, {
      method: "PATCH",
    });

    window.location.reload();
  };

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <PrimaryButton
        onClick={handleToggleIsTalkLive}
        className="absolute right-8 top-24"
      >
        {talk.isLive ? "Fechar" : "Abrir"} sessão
      </PrimaryButton>
      <h1 className="mb-8 text-6xl font-bold text-primary">{name}</h1>
      <TalkQrCodeData name={name} />
    </section>
  );
};

export default Talk;
