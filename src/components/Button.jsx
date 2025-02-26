const Button = ({ className="", buttonName, link }) => {
    return (
        <button className={`px-[210px] py-[16px] bg-quaternaria text-[16px] text-letras2 rounded-md hover:bg-bghover  ${className}`}>
            <a href={link}>{buttonName}</a>
        </button>
    );
}

export default Button;