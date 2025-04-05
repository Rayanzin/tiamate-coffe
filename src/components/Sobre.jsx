const Sobre = ({ className = "", titulo, descUm, descDois, imagem }) => {
    // sm -> 640px
    // md -> 768px
    // lg -> 1024px
    // xl -> 1280px
    // 2xl -> 1535px
    return (
        <section className={`flex gap-[130px] px-[135px] pt-[183px] pb-[155px] justify-center items-center ${className} max-xl:flex-col max-sm:py-[50px]  max-sm:gap-[30px]`}>
            <div className="w-[470px]  flex flex-col justify-center max-sm:w-[360px]">
                <h2 className="text-primaria text-[50px] mb-[30px]">{titulo}</h2>
                <p className="text-letras2 text-[16px] mb-[20px]">{descUm}</p>
                <p className="text-letras2 text-[16px]">{descDois}</p>
            </div>
            <div className="w-[570px] h-[450px] max-sm:w-[370px] max-sm:h-[330px]">
                <img className="w-full h-full rounded-md" src={imagem} alt="cafés" />
            </div>
        </section>
    );
}

export default Sobre;