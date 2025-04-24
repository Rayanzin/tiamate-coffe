import img from "../imgs/sundae.png"
const BoasVindas = () => {
  // sm -> 640px
    // md -> 768px
    // lg -> 1024px
    // xl -> 1280px
    // 2xl -> 1535px
  return (
    <section className="w-full flex justify-center bg-bgcard">
      <div className="w-[1440px] flex gap-[43px] items-center max-[1440px]:justify-center">
        <div className="w-[56%] h-[700px] max-[1440px]:w-[500px] max-[1440px]:h-[500px] max-[916px]:h-[300px] max-[916px]:w-[300px]  max-sm:hidden">
          <img
            className="w-full h-full object-cover object-[0%_0%] max-[1440px]:object-[10%_0%]"
            src={img}
            alt="sundaes"
          />
        </div>
        <div className="w-[44%]  max-sm:w-[80%]">
          <div className=" pr-[135px] max-[1440px]:pr-[10px]  max-[916px]:py-[20px]">
            <p className="text-[18px] font-normal  text-letras2 text-center">
              Para os amantes de café
            </p>
            <h2 className="text-[50px] font-bold text-primaria leading-[100%] mt-[10px] mb-[30px]  max-[916px]:text-[32px] text-center">
              Bem-vindo a <br /> Tiamte Coffee
            </h2>
            <p className="text-[16px] font-normal leading-[120%] text-letras2 mb-[20px] max-lg:text-[14px]">
              A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro
              sabor do café e o seu espírito inovador. Visamos fazer parte da
              vida das pessoas e diferentes culturas, isso é o que nos motiva a
              oferecer o café mais gostoso. Por isso, selecionamos as melhores
              plantações, os grãos, os blends e as pessoas que vão colocar a mão
              na massa para fazer esse delicioso café.
            </p>
            <p className="text-[16px] font-normal leading-[120%] text-letras2 max-lg:text-[14px]">
              Pensamos em fazer os seus momentos mais felizes, seja no café da
              manhã ou em uma reunião. Individualmente ou entre amigos. À
              Tiamate Coffee investe em um conceito atual que transmite as
              pessoas uma sensação de bem estar. Enquanto nosso café aproxima as
              pessoas, nossos serviços de Wifi gratuito as mantém conectadas.
              Descubra como navegar na internet enquanto você saboreia um
              Tiamate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoasVindas;
