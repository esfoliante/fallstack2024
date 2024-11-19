import { Archive, Chart, Leaf } from "@/styles/Icons";

import { CompanyProps } from "../components/Companies/Company";
import { HitachiLogo } from "./CompaniesImages";

export const GoldCompanies: CompanyProps[] = [
  {
    logoHref: HitachiLogo,
    name: "hitachi",
    interests: ["Backend", "Cloud Computing", "Data Analysis"],
    modalInformation: {
      title: "Hitachi Solutions",
      bodyText: (
        <p>
          A Hitachi Solutions compreende o que é necessário para transformar
          digitalmente as organizações, aproveitando o poder das mais recentes
          tecnologias e integrando-as de forma transparente nas empresas. Como
          uma empresa de consultoria global que atua nos setores privado e
          público, especializamo-nos em aplicações empresariais amigáveis
          baseadas na Microsoft cloud. O excelente trabalho que realizamos atrai
          algumas das mentes mais brilhantes lá fora. Eles compõem equipas
          diversas com perspectivas e experiências diferentes, que impulsionam a
          inovação e permitem uma ligação mais próxima com os nossos clientes.
          Junta-te a nós e faz o teu melhor trabalho de sempre numa cultura
          diversificada e recompensadora que está constantemente a impulsionar a
          inovação para um futuro melhor.
        </p>
      ),
      instagramLink: "https://www.instagram.com/hitachisolutions.portugal/",
      linkedinLink:
        "https://www.linkedin.com/company/hitachi-solutions-portugal/",
      website: "https://global.hitachi-solutions.com/",
      facts: [
        {
          iconSrc: Archive,
          description: "Empresa de consultoria global",
        },
        {
          iconSrc: Leaf,
          description: "Cultura diversificada e recompensadora",
        },
        {
          iconSrc: Chart,
          description:
            "Especializados em aplicações empresariais amigáveis baseadas na Microsoft cloud",
        },
      ],
    },
  },
];
