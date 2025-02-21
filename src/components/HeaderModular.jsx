

const HeaderModular = ({className = "", imagem, texto, textoMarcado, redes, textoMarcadoDois, textoDois }) => {
    return (
        <section className="m-auto w-full h-[490px]">
            <div className="relative h-full ">
                <div className="absolute z-0 w-full h-full">
                    <img className="w-full h-full" src={imagem} alt="café" />
                </div>
                <div className={`flex flex-col gap-[14px] z-10 relative top-[110px] left-[19.6%] w-[548px] ${className}`}>
                    <h2 className="text-letras text-[55px] leading-none font-bold">
                        <strong className="text-[55px] font-semibold text-textheader">{textoMarcado}</strong>
                        {texto}
                    </h2>
                    <h2 className="text-letras text-[50px] leading-none font-normal">
                        <strong className="text-[55px] text-quaternaria block">{textoMarcadoDois}</strong>
                        {textoDois}
                    </h2>
                    <div>
                        {redes}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeaderModular;