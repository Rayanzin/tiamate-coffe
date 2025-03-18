import RedesSociais from "./RedesSociais";
import ButtonModular from "./ButtonModular";

const Duvida = () => {
    return (
        <section className="w-full ">
            <section className="w-[1170px] m-auto">
                <div>
                    <h2 className="text-[50px] font-bold text-primaria">Alguma dúvida?</h2>
                    <p className="text-[18px] font-normal text-letras2">Deixe sua mensagem</p>
                </div>
                <div className="flex gap-[130px]">
                    <form>
                        <ButtonModular
                        className=""
                            type={`primary`}
                            
                        />
                    </form>
                    <div className="flex flex-col gap-[28px]">
                        <RedesSociais
                            className="w-[60px] h-[60px]" />
                        <h2 className="text-[50px] font-bold text-letras2 leading-none">
                            Curta e <br />
                            Comparilhe
                        </h2>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Duvida;