import DepoimentoFranquiadaModular from "./DepoimentoFranquiadaModular";
import img from "../imgs/franquiada-aquilla.png"
const DepoimentosFranquiados = () => {
  const franquiados = [
    {
      img: img,
      Depoimento: " 'Antes de optar por ser uma franqueada Tiamate,analisei varias franquias do mercado. Mas senti, já nas primeiras apresentações que o objetivo do Grupo não era simplismente que eu abrisse mais uma loja, e sim que eu me tornasse um parceiro de sucesso. O processo de procura do ponto e abertura da loja foi muito pratico. A consultoria e os treinamentos com o apoio dos diversos manuais da marca transcederam minhas expectativas. Os resultados estão sendo excelentes e percebidos por todos, sócios, funcionários e, principalmente, pelos clientes '.",
      Nome: "Aquila Carvalho",
      Cidade: "Salvador",
      UF: "BA",
    },
  ];
  return (
    <>
      {franquiados.map((franquiados, index) => (
        <DepoimentoFranquiadaModular
          key={index}
          img={franquiados.img}
          Depoimento={franquiados.Depoimento}
          Nome={franquiados.Nome}
          Cidade={franquiados.Cidade}
          UF={franquiados.UF}
        />
      ))}
    </>
  );
};

export default DepoimentosFranquiados;
