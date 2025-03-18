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
                <li className='hover:mb-2 duration-100'>
                    <a className='py-[6px]' href="/">Inicio</a>
                </li>
                <li className=' hover:mb-2 py-[6px] duration-100'>
                    <a className='py-[6px]' href="/NossoCafe">Nosso Café</a>
                </li>
                <li className=' hover:mb-2 py-[6px] duration-100'>
                    <a className='py-[6px]' href="/Noticias">Notícias</a>
                </li>
                <li className=' hover:mb-2 py-[6px] duration-100'>
                    <a className='py-[6px]' href="/Contato">Contato</a>
                </li>
                <li className=' hover:mb-2 py-[6px] duration-100'>
                    <a className='py-[6px]' href="/Cardapio">Cardápio</a>
                </li>
            </ul>
            <div>
                <a className="text-letras2 py-[16px] px-[23px] bg-quaternaria rounded-md hover:bg-bghover hover:text-l2hover cursor-pointer" href="/noticias">Seja um Franqueado</a>
            </div>
        </nav>
    );
}

export default Header;