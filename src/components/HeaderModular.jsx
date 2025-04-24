const HeaderModular = ({
  className = "",
  classH2 = "",
  imagem,
  texto,
  textoMarcado,
  redes,
  textoMarcadoDois,
  textoDois,
}) => {

  // sm -> 640px
  // md -> 768px
  // lg -> 1024px
  // xl -> 1280px
  // 2xl -> 1535px

  return (
    <section className="relative m-auto w-full h-[490px] max-lg:h-[400px] duration-200 max-md:h-[300px] max-sm:h-[250px]">
      <div className="absolute z-0 w-full h-full">
        <img className="w-full h-full " src={imagem} alt="café" />
      </div>
      <div className="relative h-full m-auto">
        <div
          className={`z-10 relative top-[110px] w-[1170px] m-auto ${className} max-md:top-[50px] max-sm:top-[50px]`}
        >
          <div className={`flex flex-col gap-[14px] w-[570px] ${classH2} max-[1190px]:px-[10px] max-lg:w-[400px] max-lg:ml-[10%] max-sm:ml-[50px] max-sm:w-[300px]`}>
            <h2 className={`text-letras text-[55px] leading-none font-bold max-lg:text-[40px] max-sm:text-[30px]`}>
              <strong className="text-[55px] font-semibold text-textheader max-lg:text-[40px] max-sm:text-[30px]">
                {textoMarcado} <br />
              </strong>
              {texto}
            </h2>
            <h2 className="text-letras text-[50px] leading-none font-normal max-lg:text-[40px] max-sm:text-[30px]">
              <strong className="text-[55px] text-quaternaria block max-lg:text-[40px] max-sm:text-[30px]">
                {textoMarcadoDois}
              </strong>
              {textoDois}
            </h2>
            <div>{redes}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderModular;
