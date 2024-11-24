"use client";

import PrimaryButton from "../../PrimaryButton";

interface CloseTalkButtonProps {
  id: string;
  action: {
    isLive: boolean;
  };
}

const CloseTalkButton: React.FC<CloseTalkButtonProps> = ({ id, action }) => {
  const handleToggleIsTalkLive = async () => {
    await fetch(`/api/action/${id}`, {
      method: "PATCH",
    });

    window.location.reload();
  };

  return (
    <PrimaryButton
      onClick={handleToggleIsTalkLive}
      className={`absolute right-8 top-24 h-12 w-64 text-xl font-bold ${
        action.isLive ? "bg-red-500" : "bg-green-500"
      }`}
    >
      {action.isLive ? "Fechar" : "Abrir"} ação
    </PrimaryButton>
  );
};

export default CloseTalkButton;
