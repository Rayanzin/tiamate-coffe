import ButtonModular from "./ButtonModular";

const NoticiaCompletaModular = ({ img, titulo, link, className }) => {
  return (
    <div className="w-[370px]">
      <div className=" w-[370px] h-[230px] rounded-md overflow-hidden bg-slate-500 hover:scale-105 cursor-pointer duration-300 active:cursor-progress">
        <img className=" w-full h-full" src={img} alt="imagem da noticia" />
      </div>
      <p className="py-[20px] text-[24px] text-tercearia font-bold leading-none">{titulo}</p>
      <ButtonModular type={`default`} className={`!w-[100%] ${className} !bg-[#ffffff00] !border-letras3 hover:!bg-primaria !text-primaria hover:!text-letras2 active:!bg-quaternaria`} link={link} buttonName={`Notícia Completa`} />
    </div>
  );
};

export default NoticiaCompletaModular;
