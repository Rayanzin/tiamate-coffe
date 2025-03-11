import DepoimentosFranquiados from "../components/DepoimentosFranquiados";
import Diferenciais from "../components/Diferenciais";
import Escolha from "../components/Escolha";
import Franquia from "../components/Franquia";
import HeaderNoticias from "../components/HeaderNoticias";
import MaisInfoDois from "../components/MaisInfoDois";
import MaisInfoUm from "../components/MaisInfoUm";
import ModeloCoffe from "../components/ModeloCoffe";
import ModeloToGo from "../components/ModeloToGo";
import NoticiaCompleta from "../components/NoticiaCompleta";
import QuemSomos from "../components/QuemSomos";
import VideoFranqueado from "../components/VideoFranqueado";

const Noticias = () => {
  return (
    <main className="max-w-[1920px] m-auto bg-white">
      <HeaderNoticias />
      <QuemSomos/>
      <VideoFranqueado/>
      <Escolha/>
      <ModeloCoffe />
      <ModeloToGo /> 
      <MaisInfoUm/>
      <Diferenciais/>
      <MaisInfoDois/>
      <DepoimentosFranquiados/>
      <NoticiaCompleta/>
      <Franquia />
    </main>
  );
}

export default Noticias;