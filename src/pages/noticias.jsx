import Franquia from "../components/Franquia";
import HeaderNoticias from "../components/HeaderNoticias";
import MaisInfoDois from "../components/MaisInfoDois";
import MaisInfoUm from "../components/MaisInfoUm";
import ModeloCoffe from "../components/ModeloCoffe";
import ModeloToGo from "../components/ModeloToGo";

const Noticias = () => {
  return (
    <main className="max-w-[1920px] m-auto bg-white">
      <HeaderNoticias />
      <ModeloCoffe />
      <ModeloToGo />
      <MaisInfoUm/>
      <MaisInfoDois/>
      <Franquia />
    </main>
  );
}

export default Noticias;