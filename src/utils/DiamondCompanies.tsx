import { Archive, Leaf, Trophy } from "@/styles/Icons";

import { CompanyProps } from "../components/Companies/Company";
import { armisLogo } from "./CompaniesImages";

export const DiamondCompanies: CompanyProps[] = [
  {
    logoHref: armisLogo,
    name: "armis",
    modalInformation: {
      title: "Armis",
      bodyText: (
        <>
          <p>
            A ARMIS é um grupo tecnológico com mais de 18 anos de história,
            dedicado à inovação, desenvolvimento e implementação de soluções que
            melhoram o crescimento dos seus clientes. Especializada em
            Cibersegurança, Inteligência Artificial, Business Intelligence,
            Enterprise Solutions e Data, a ARMIS atua nos setores mais
            exigentes, como Energia, Transportes & Mobilidade, Desporto e
            Fintech. Além disso, a ARMIS é responsável pelo desenvolvimento de
            uma dezena de produtos de software disruptivos em diversas áreas de
            negócio, nomeadamente o Drive, Workplace HUB, Proscore e o Escoita.
          </p>
          <br />
          <p>
            A nossa presença global estende-se por localizações estratégicas no
            Porto, Lisboa, São Paulo, Utrecht, Miami, Nova Iorque e Dubai: somos
            uma multinacional que empreende projetos internacionais em mais de
            11 países diferentes. O nosso lema &quotMoving Business Through
            Technology&quot dá vida à nossa missão diária, impulsionando-nos com
            uma dedicação inabalável para dinamizar a evolução dos negócios
            através de soluções tecnológicas de ponta.
          </p>
          <br />
          <p>
            Nos projetos ARMIS, utilizamos diversos programas e ferramentas
            consoante as necessidades de cada um, entre eles SQL, .Net Core e
            C#. Enquanto parceiros, utilizamos inúmeras tecnologias e aplicações
            da Microsoft que nos permitem garantir as soluções mais completas e
            eficientes.
          </p>
          <br />
          <p>
            Na ARMIS todos os anos acolhemos estagiários curriculares vindos do
            ISEP e de outras faculdades. O objetivo é integrar estes estagiários
            nas nossas equipas de produção de forma a colocarem em prática os
            conhecimentos obtidos ao longo do curso e a desenvolverem os seus
            projetos de estágio. Os estágios têm uma duração de aproximadamente
            cinco meses, uma vez que acreditamos que é o tempo necessário para o
            estagiário se integrar na equipa, para planear o desenvolvimento do
            projeto e para o conseguir executar de forma completa.
          </p>
        </>
      ),
      instagramLink: "https://www.instagram.com/armisgroup/",
      linkedinLink: "https://www.linkedin.com/company/armisgroup/",
      website: "https://www.armisgroup.com",
      videoHref: "https://www.youtube.com/embed/7lWuDHg4MGA",
      videoTitle: "Vídeo promocional",
      facts: [
        {
          iconSrc: Trophy,
          description:
            "Multinacional com a sua presença em 11 países diferentes",
        },
        {
          iconSrc: Archive,
          description: "+ 18 anos de história",
        },
        {
          iconSrc: Leaf,
          description: "Acolhimento de estagiários curriculares",
        },
      ],
    },
    className: "w-4/6",
    interests: ["AI", "Mobile", "Software Development", "Backend"],
  },
];
