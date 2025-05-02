import React from 'react';

const Estrelas = ({ nota }) => {
    const estrelas = [];

    for (let i = 1; i <= 5; i++) {
        estrelas.push(
            <svg key={i} width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13 0L15.9187 8.98278H25.3637L17.7225 14.5344L20.6412 23.5172L13 17.9656L5.35879 23.5172L8.27747 14.5344L0.636266 8.98278H10.0813L13 0Z"
                    fill={i <= nota ? "#A97744" : "#D3D3D3"}
                />
            </svg>
        );
    }

    return (
        <div className="flex gap-1">
            {estrelas}
        </div>
    );
};

const CardComents = ({ Nota, Comentario, Imagem, Nome }) => {
    return (
        <div className="w-[400px] h-[323px] bg-bgcard rounded-md px-[35px] pt-[58px] pb-[32px] flex flex-col justify-between max-[460px]:w-[300px] max-[460px]:h-[250px] max-[460px]:py-[20px] max-md:opacity-80">
            <div className="flex items-center gap-2">
                <Estrelas nota={parseInt(Nota)} />
                <span className="text-sm text-gray-500"></span>
            </div>
            <p className="text-[12px] mt-2 max-[460px]:text-[10px]">
                {Comentario}
            </p>
            <div className="flex items-center gap-[23px] mt-4 max-[460px]:gap-[10px]">
                <div className="w-[65px] h-[65px] rounded-full max-[460px]:w-[50px] max-[460px]:h-[50px]">
                    <img className="w-full h-full rounded-full" src={Imagem} alt="Foto" />
                </div>
                <p className="text-sm font-semibold max-[460px]:text-[12px]">{Nome}</p>
            </div>
        </div>
    );
};

export default CardComents;
