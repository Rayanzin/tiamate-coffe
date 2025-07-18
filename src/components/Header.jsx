import { useState } from "react";
import img from "../imgs/logo-tiamate.png";
const Header = () => {
  const [overlay, setOverlay] = useState(false);
  const [menu, setMenu] = useState(false);

  function abrirMenu() {
    setOverlay(true);
    setMenu(true);
  }
  function fecharMenu() {
    setOverlay(false);
    setMenu(false);
  }

  return (
    <section className="sticky top-0 z-50 w-full flex items-center justify-center bg-secundaria px-[10px] ">
      <nav className="w-[1190px] text-letras no-underline flex items-center bg-secundaria py-[30px] lg:justify-between max-lg:justify-evenly max-sm:py-2">
        <ul className="list-none flex gap-[45px] items-center max-lg:*:hidden">
          <li className="w-36 h-12">
            <a href="/">
              <img className="w-full h-full" src={img} alt="Logo" />
            </a>
          </li>
          <li className="hover:mb-2 duration-100">
            <a className="py-[6px]" href="/">
              Inicio
            </a>
          </li>
          <li className=" hover:mb-2 py-[6px] duration-100">
            <a className="py-[6px]" href="/NossoCafe">
              Nosso Café
            </a>
          </li>
          <li className=" hover:mb-2 py-[6px] duration-100">
            <a className="py-[6px]" href="/Noticias">
              Notícias
            </a>
          </li>
          <li className=" hover:mb-2 py-[6px] duration-100">
            <a className="py-[6px]" href="/Contato">
              Contato
            </a>
          </li>
          <li className=" hover:mb-2 py-[6px] duration-100">
            <a className="py-[6px]" href="/Cardapio">
              Cardápio
            </a>
          </li>
        </ul>
        <div
          onClick={abrirMenu}
          className={`cursor-pointer lg:hidden w-[30px] h-[30px] flex justify-center items-center max-md:w-[45px] max-md:h-[45px]`}
        >
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFJJREFUSEtjZKAxYKSx+QyjFhAMYfoH0cpyl/8EnYVHQXjnHhRHY/iA5hZQ4npseukfBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AfoIUDz0hQABbYYGc4io5oAAAAASUVORK5CYII=" className="w-full h-full"/>
        </div>
        <div className="w-50 h-16 lg:hidden">
          <a href="/">
            <img className="w-full h-full" src={img} alt="Logo" />
          </a>
        </div>
        <div className="text-nowrap">
          <a
            className="flex w-full h-full justify-center items-center py-[16px] px-[23px] text-letras2  bg-quaternaria rounded-md hover:bg-bghover hover:text-l2hover cursor-pointer  max-md:text-[12px] max-md:py-[10px] max-md:px-[16px] max-sm:hidden"
            href="/noticias"
          >
            Seja um Franqueado
          </a>
        </div>
      </nav>
      <div
        className={`z-20 absolute w-[300px] h-screen  bg-secundaria left-0 top-0 translate-x-[-100%] p-[10px] duration-300 ${
          menu ? "menuon" : "menuoff"
        }`}
      >
        <ul className="list-none flex flex-col gap-[15px] *:bg-primaria *:w-full *:h-[50px] *:rounded-md *:flex *:justify-center *:items-center   *:*:w-full text-center *:*:py-[12px]">
          <li className="w-full !h-[100px]">
            <a className="w-full h-full !p-0" href="/">
              <img
                className="w-full h-full object-cover"
                src={img}
                alt="Logo"
              />
            </a>
          </li>
          <li className="hover:bg-l2hover">
            <a href="/">Inicio</a>
          </li>
          <li className="hover:bg-l2hover">
            <a href="/NossoCafe">Nosso Café</a>
          </li>
          <li className="hover:bg-l2hover">
            <a href="/Noticias">Notícias</a>
          </li>
          <li className="hover:bg-l2hover">
            <a href="/Contato">Contato</a>
          </li>
          <li className="hover:bg-l2hover">
            <a href="/Cardapio">Cardápio</a>
          </li>
          <li className="hover:bg-l2hover text-nowrap">
            <a href="/noticias">Seja um Franqueado</a>
          </li>
        </ul>
      </div>
      <div
        id="overlay"
        onClick={fecharMenu}
        className={`z-10 w-screen h-screen absolute top-0 left-0 bg-[#00000070] duration-200 ${
          overlay ? "overlayon" : "overlayoff"
        }`}
      ></div>
    </section>
  );
};

export default Header;
