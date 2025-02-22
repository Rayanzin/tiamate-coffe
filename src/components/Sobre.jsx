const Sobre = ({className="", titulo, descUm, descDois, imagem }) => {
    return (
        <section className={`flex gap-[130px] px-[135px] pt-[183px] pb-[155px] justify-center ${className}`}>
            <div className="w-[470px]  flex flex-col justify-center">
                <h2 className="text-primaria text-[50px] mb-[30px]">{titulo}</h2>
                <p className="text-letras2 text-[16px] mb-[20px]">{descUm}</p>
                <p className="text-letras2 text-[16px]">{descDois}</p>
            </div>
            <div className="w-[570px] h-[450px]">
                <img className="w-full h-full rounded-md" src={imagem} alt="cafés" />
            </div>
        </section>
    );
}

export default Sobre;