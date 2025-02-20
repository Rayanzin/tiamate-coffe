import RedesSociais from "./RedesSociais";

const HeaderModular = ({imagem, texto, textoMarcado}) => {
    return ( 
        <section className="m-auto w-full h-[490px] bg-black">
            <div className="relative h-full">
                <div className="absolute z-0 w-full h-full">
                    <img className="w-full h-full" src={imagem} alt="café" />
                </div>
                <div className="flex flex-col gap-[28px] z-10 relative top-[110px] left-[18.7%] w-[548px] ">
                    <h2 className="text-letras text-[55px] leading-none">
                        <strong className="text-[55px] font-semibold text-textheader">{textoMarcado}</strong>
                        {texto}
                    </h2>
                    <RedesSociais/>
                </div>
            </div>
        </section>
     );
}
 
export default HeaderModular;