import { Button } from "antd";
const Botao = ({ className = "", buttonName, link }) => {
  return (
    <Button
      type="primary"
      href={link}
      className={`w-[570px] h-[60px] !bg-quaternaria text-[16px] text-letras2 ${className}`}
    >
      {buttonName}
    </Button>
  );
};

export default Botao;
