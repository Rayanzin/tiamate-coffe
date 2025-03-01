const Button = ({ className="", buttonName, link }) => {
    return (
        <button className={`w-[570px] h-[60px] bg-quaternaria text-[16px] text-letras2 rounded-md hover:bg-bghover  ${className}`}>
            <a className="flex items-center justify-center w-[100%] h-[100%]" href={link}>{buttonName}</a>
        </button>
    );
}

export default Button;