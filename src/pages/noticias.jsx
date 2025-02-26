import Franquia from "../components/Franquia";
import HeaderNoticias from "../components/HeaderNoticias";
import ModeloCoffe from "../components/ModeloCoffe";
import ModeloToGo from "../components/ModeloToGo";

const Noticias = () => {
  return (
    <main className="max-w-[1920px] m-auto bg-white">
      <HeaderNoticias />
      <ModeloCoffe/>
      <ModeloToGo/>
      <Franquia />
    </main>
  );
}

export default Noticias;