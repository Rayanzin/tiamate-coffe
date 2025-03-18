const BoasVindas = () => {
  return (
    <section className="w-full flex justify-center bg-bgcard">
      <div className="w-[1440px] flex gap-[43px] items-center ">
        <div className="w-[56%] h-[700px] ">
          <img
            className="w-full h-full object-cover object-[0%_0%]"
            src="../public/imgs/sundae.png"
            alt="sundaes"
          />
        </div>
        <div className="w-[44%]">
          <div className=" pr-[135px]">
            <p className="text-[18px] font-normal  text-letras2">
              Para os amantes de café
            </p>
            <h2 className="text-[50px] font-bold text-primaria leading-[100%] mt-[10px] mb-[30px]">
              Bem-vindo a <br /> Tiamte Coffee
            </h2>
            <p className="text-[16px] font-normal leading-[120%] text-letras2 mb-[20px]">
              A Tiamate Coffee traduz de maneira clara e objetiva o verdadeiro
              sabor do café e o seu espírito inovador. Visamos fazer parte da
              vida das pessoas e diferentes culturas, isso é o que nos motiva a
              oferecer o café mais gostoso. Por isso, selecionamos as melhores
              plantações, os grãos, os blends e as pessoas que vão colocar a mão
              na massa para fazer esse delicioso café.
            </p>
            <p className="text-[16px] font-normal leading-[120%] text-letras2">
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
