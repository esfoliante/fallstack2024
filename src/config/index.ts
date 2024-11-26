const config = {
  cookies: {
    auth: {
      name: "@Fallstack23:auth",
      maxAge: 34560000, // 400 days (in seconds) - its the maximum value for the maxAge of a cookie
    },
  },

  defaultAvatar: "/assets/images/default_user.png",

  localStorage: {
    hideInstallPrompt: "@Fallstack23:hidePrompt",
  },

  uploads: {
    avatar: {
      types: ["image/png", "image/jpeg"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
    cv: {
      types: ["application/pdf"],
      maxSize: 5 * 1024 * 1024, // 5mb
    },
  },

  constants: {
    actionQrCodeRefreshRateMs: 15 * 1000, // 15 seconds

    actionNames: {
      createProfile: "Cria o teu Perfil",
      uploadCv: "Faz o Upload do teu CV",
      updateLinkedin: "Associa o teu LinkedIn",
      akaPeopleBooth: "Visita a banca da AkaPeople",
      natixisBooth: "Visita a banca da Natixis",
      aprBooth: "Visita a banca da APR",
      hitachiBooth: "Visita a banca da Hitachi",
      convatecBooth: "Visita a banca da Convatec",
      niwBooth: "Visita a banca da NiW",
      deloitteBooth: "Visita a banca da Deloitte",
      accentureBooth: "Visita a banca da Accenture",
      armisBooth: "Visita a banca da Armis",
      devscopeBooth: "Visita a banca da Devscope",
      msgInsurItBooth: "Visita a banca da msg insur:it",
      glinttBooth: "Visita a banca da Glintt",
      konkConsultingBooth: "Visita a banca da konk consulting",
    },
  },
};

export default config;
