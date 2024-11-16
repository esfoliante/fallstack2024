import React from "react";

import getServerSession from "@/services/getServerSession";
import TalkQrCodeData from "@/components/TalkQrCodeData";

import Custom404 from "../../not-found";

interface TalkParams {
  params: {
    name: string;
  };
}

const talk: React.FC<TalkParams> = async ({ params }) => {
  const session = await getServerSession();
  const { name } = await params;

  if (!session || !session.isAdmin) {
    return Custom404();
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <TalkQrCodeData name={name} />
    </section>
  );
};

export default talk;
