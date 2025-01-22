import React from 'react';

const Header = () => {
    return (
        <nav className="text-[#F5E7DA] no-underline flex items-center bg-[#292625] py-6 gap-60 justify-center">
            <ul className="list-none flex gap-12 items-center ">
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
                <a className="text-[#3B2416] p-4 bg-[#C7794A] rounded-md hover:bg-[#b1693f] hover:text-[#50321f]" href="/franquia">Seja um Franqueado</a>
            </div>
        </nav>
    );
}

export default Header;