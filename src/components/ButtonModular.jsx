import { Button } from "antd";
const ButtonModular = ({ className = "", buttonName, link, type }) => {
  return (
    <Button
      type={type}
      href={link}
      className={`w-[570px] h-[60px] !bg-quaternaria text-[16px] text-letras2 ${className}`}
    >
      {buttonName}
    </Button>
  );
};

export default ButtonModular;
