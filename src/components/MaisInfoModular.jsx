import Button from "./ButtonModular";

const MaisInfoModular = ({ imagem, titulo }) => {
  return (
    <section className="w-full h-[500px] relative max-lg:h-[400px] max-sm:h-[300px] max-[450px]:h-[250px]">
      <div className="w-[full] h-full relative">
        <img className="w-full h-full " src={imagem} alt="info1" />
      </div>
      <div className="absolute w-full h-full bg-[#31190FCC] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] "></div>
      <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-center max-md:w-[70%] max-sm:w-[80%]">
        <h2 className="text-[50px] text-letras font-bold leading-none mb-[37px] max-xl:text-[32px] max-sm:text-[24px] max-[500px]:text-[16px]">
          {titulo}
        </h2>
        <Button
          className="max-md:w-[300px] max-sm:h-[50px] max-sm:w-[200px] max-sm:*:text-[14px]"
          type={`primary`}
          buttonName={`Mais Informações`}
          link={`#Franquia`}
        />
      </div>
    </section>
  );
};

export default MaisInfoModular;
