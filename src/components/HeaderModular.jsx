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
    
  return (
    <section className="relative m-auto w-full h-[490px]">
      <div className="absolute z-0 w-full h-full">
        <img className="w-full h-full" src={imagem} alt="café" />
      </div>
      <div className="relative h-full m-auto">
        <div
          className={`z-10 relative top-[110px] w-[1170px] m-auto ${className}`}
        >
          <div className={`flex flex-col gap-[14px] w-[570px] ${classH2}`}>
            <h2 className={`text-letras text-[55px] leading-none font-bold`}>
              <strong className="text-[55px] font-semibold text-textheader">
                {textoMarcado} <br />
              </strong>
              {texto}
            </h2>
            <h2 className="text-letras text-[50px] leading-none font-normal">
              <strong className="text-[55px] text-quaternaria block">
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
