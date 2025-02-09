import React from 'react';

const Header = () => {
    return (
        <nav className="text-letras no-underline flex items-center bg-secundaria py-[30px] gap-[220px] justify-center">
            <ul className="list-none flex gap-[45px] items-center ">
                <li className='w-36 h-12'>
                    <a  href="/">
                        <img className='w-full h-full' src="./src/imgs/logo-tiamate.png" alt="Logo" />
                    </a>
                </li>
                <li className='hover:mb-1 duration-75'>
                    <a href="/">Inicio</a>
                </li>
                <li className='hover:mb-1 duration-75'>
                    <a href="/NossoCafe">Nosso Café</a>
                </li>
                <li className='hover:mb-1 duration-75'>
                    <a href="/Noticias">Notícias</a>
                </li>
                <li className='hover:mb-1 duration-75'>
                    <a href="/Contato">Contato</a>
                </li>
                <li className='hover:mb-1 duration-75'>
                    <a href="/Cardapio">Cardápio</a>
                </li>
            </ul>
            <div>
                <a className="text-letras2 py-[16px] px-[23px] bg-quaternaria rounded-md hover:bg-bghover hover:text-l2hover" href="#Franquia">Seja um Franqueado</a>
            </div>
        </nav>
    );
}

export default Header;