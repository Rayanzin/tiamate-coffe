const DepoimentoFranquiadaModular = ({ img, Depoimento, Nome, Cidade, UF }) => {
  return (
    <section className="pt-[146px] pb-[117px] flex justify-center">
      <div className="w-[635px] flex flex-col items-center">
        <h2 className="text-primaria text-[50px] font-semibold text-nowrap mb-[46px]">Depoimento Franqueado(a)</h2>
        <div className="w-[195px] h-[195px] rounded-[50%] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="Imagem do franqueado"
          />
        </div>
        <p className="text-center text-[16px] font-normal mt-[32px] mb-[52px]">{Depoimento}</p>
        <p className="text-tercearia text-[24px] font-bold">
         {Nome}
        </p>
        <p className="text-[16px] font-normal">
          Franquia - Unidade {Cidade} - {UF}
        </p>
      </div>
    </section>
  );
};

export default DepoimentoFranquiadaModular;
