import Connect from "../../../public/assets/images/connect.png";
import Pitch from "../../../public/assets/images/pitch.png";
import Activity from "../Activity";
import CompaniesSection from "../Companies/CompaniesSection";
import FaqSection from "../FaqSection";
import InfoText from "../InfoText";

interface ContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
  return (
    <section
      ref={contentRef}
      className="container mx-auto rounded-lg p-8 sm:w-3/4 lg:w-full lg:pt-14"
    >
      <InfoText
        days={[26, 27]}
        month="Novembro"
        beginningTime="9h00"
        endTime="17:30h"
      />

      <section className="my-16 grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-rows-2 md:gap-y-14">
        <Activity logo={Pitch} title={"Apresentações das empresas"} day={26}>
          O primeiro dia é dedicado às apresentações{" "}
          <span className="font-bold text-orange-600">(pitches) </span>
          das empresas participantes.
          <br />
          Ao longo destas sessões terás a oportunidade de{" "}
          <span className="font-bold text-orange-600">conhecer </span>
          melhor cada empresa, os seus valores e oportunidades, ajudando-te a
          identificar as que se alinham com os teus
          <span className="font-bold text-orange-600"> interesses</span> para as
          interações do segundo dia.
        </Activity>
        <Activity
          logo={Connect}
          title={"Connection's Train"}
          day={27}
          location={"Sala de Eventos (Edificio H) do ISEP"}
        >
          No segundo dia terás a oportunidade de{" "}
          <span className="font-bold text-orange-600">interagir </span>
          diretamente com os representantes das empresas presentes,
          permitindo-te
          <span className="font-bold text-orange-600"> esclarecer </span>
          dúvidas, expandir a tua rede de contactos e obter feedback valioso
          sobre as empresas e as
          <span className="font-bold text-orange-600"> oportunidades</span>{" "}
          parte do teu interesse. Aproveita ao máximo este momento único para te
          destacares!
        </Activity>
      </section>

      <CompaniesSection />

      {/* <SponsorsSection /> */}

      <FaqSection />
    </section>
  );
};

export default Content;
