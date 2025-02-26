import Button from "./Button";

const MaisInfoModular = ({imagem, titulo}) => {
    return (
        <section className="w-full h-[500px] relative">
            <div className="w-[full] h-full relative">
                <img className="w-full h-full " src={imagem} alt="info1" />
            </div>
            <div className="absolute w-full h-full bg-[#31190FCC] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]"></div>
            <div className="absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-center">
                <h2 className="text-[50px] text-letras font-bold leading-none mb-[37px]">{titulo}</h2>
                <Button
                    buttonName={`Mais Informações`}
                    link={`#Franquia`}
                />
            </div>
        </section>
    );
}

export default MaisInfoModular;