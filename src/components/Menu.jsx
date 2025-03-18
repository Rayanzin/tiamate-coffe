import { useState } from "react";
import img1 from "../imgs/coffe-brigadeiro.png"
import img2 from "../imgs/coffe-cookie.png"
import img3 from "../imgs/coffe-caramelo.png"
import img4 from "../imgs/coffe-tradicional.png"
import img5 from "../imgs/merry-berry.png"
import expr1 from "../imgs/expresso-tradicional.png"
import expr2 from "../imgs/expresso-americano.png"
import expr3 from "../imgs/expresso-machiato.png"
import expr4 from "../imgs/expresso-chantily.png"
import expr5 from "../imgs/expresso-latte.png"
import cream1 from "../imgs/cream-morango.png"
import cream2 from "../imgs/cream-baunilha.png"
import cream3 from "../imgs/cream-chocolate.png"
import cream4 from "../imgs/cream-churros.png"
import italian1 from "../imgs/starberry-soda.png"
import italian2 from "../imgs/ponkan.png"
import italian3 from "../imgs/green-apple.png"
import italian4 from "../imgs/peach.png"
import cap1 from "../imgs/café-tradicional.png"
import cap2 from "../imgs/baunilha.png"
import cap3 from "../imgs/avela.png"
import cap4 from "../imgs/canela.png"
import cap5 from "../imgs/mocha.png"
import cap6 from "../imgs/caramelo.png"
import cap7 from "../imgs/classico-cremoso.png"
import cap8 from "../imgs/latte-tea.png"
import cap9 from "../imgs/choco-tea.png"
import ice1 from "../imgs/ice-tea-pessego.jpg"
import ice2 from "../imgs/ice-tea-limao.jpg"
import ice3 from "../imgs/suco-laranja.png"
import ice4 from "../imgs/suco-uva.jpg"
import ice5 from "../imgs/agua.jpg"
import ice6 from "../imgs/agua-c-gas.jpg"
const Menu = () => {
  const cardapio = [
    {
      Nome: "Lançamentos",
      MerryBerry: {
        nome: "Merry Berry",
        img: img5,
      },
    },
    {
      Nome: "Expressos",
      Tradicional: {
        nome: "Tradicional",
        img: expr1,
      },
      Americano: {
        nome: "Americano",
        img: expr2,
      },
      Macchiato: {
        nome: "Macchiato",
        img: expr3,
      },
      Chantilly: {
        nome: "Chantilly",
        img: expr4,
      },
      Latte: {
        nome: "Latte",
        img: expr5,
      },
    },
    {
      Nome: "Tiamatino Coffee",
      coffeebrigadeiro: {
        nome: "Tiamatino coffee brigadeiro",
        img: img1,
      },
      coffeecookie: {
        nome: "Tiamatino coffee cookie",
        img: img2,
      },
      coffeecaramelo: {
        nome: "Tiamatino coffee caramelo",
        img: img3,
      },
      coffeetradicional: {
        nome: "Tiamatino coffee tradicional",
        img: img4,
      },
    },
    {
      Nome: "Tiamatino Cream",
      creammorango: {
        nome: "Tiamatino cream de morango",
        img: cream1,
      },
      creambaunilha: {
        nome: "Tiamatino cream de baunilha",
        img: cream2,
      },
      creamchocolate: {
        nome: "Tiamatino cream chocolate",
        img: cream3,
      },
      creamchurros: {
        nome: "Tiamatino cream de churros",
        img: cream4,
      },
    },
    {
      Nome: "Bebidas Italianas",
      StrawberrySoda: {
        nome: "Strawberry Soda",
        img: italian1,
      },
      PonkanTangerineSoda: {
        nome: "Ponkan Tangerine Soda",
        img: italian2,
      },
      GreenAppleSoda: {
        nome: "Green Apple Soda",
        img: italian3,
      },
      PeachSoda: {
        nome: "Peach Soda",
        img: italian4,
      },
    },
    {
      Nome: "Cappuccino",
      Tradicional: {
        nome: "Tradicional",
        img: cap1,
      },
      baunilha: {
        nome: "Baunilha",
        img: cap2,
      },
      avela: {
        nome: "Avelã",
        img: cap3,
      },
      chocolatecomcanela: {
        nome: "Chocolate com canela",
        img: cap4,
      },
      mocha: {
        nome: "Mocha",
        img: cap5,
      },
      caramelotiamate: {
        nome: "caramelo tiamate",
        img: cap6,
      },
      chocolatecremoso: {
        nome: "Chocolate Clássico Cremoso",
        img: cap7,
      },
      lattetea: {
        nome: "Latte tea",
        img: cap8,
      },
      chocotea: {
        nome: "Choco Tea",
        img: cap9,
      },
    },
    {
      Nome: "Bebidas Geladas",
      IceTeaPessego: {
        nome: "Ice Tea Pêssego",
        img: ice1,
      },
      IceTeaLimao: {
        nome: "Ice Tea Limão",
        img: ice2,
      },
      Sucode: {
        nome: "Laranja",
        img: ice3,
      },
      SucodeUva: {
        nome: "Suco de Uva",
        img: ice4,
      },
      Águasemgas: {
        nome: "Água sem gás",
        img: ice5,
      },
      Águacomgas: {
        nome: "Água com gás",
        img: ice6,
      },
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(2);

  const [itens, setItens] = useState([
    {
      nome: "Tiamatino coffee brigadeiro",
      img: img1,
    },
    {
      nome: "Tiamatino coffee cookie",
      img: img2,
    },
    {
      nome: "Tiamatino coffee caramelo",
      img: img3,
    },
    {
      nome: "Tiamatino coffee tradicional",
      img: img4,
    },
  ]);

  function mudarCategoria(index) {
    setSelectedCategory(index);

    const categoria = cardapio[index];
    const categoriaItens = Object.keys(categoria).reduce((acc, key) => {
      if (key !== "Nome") {
        acc.push(categoria[key]);
      }
      return acc;
    }, []);

    // Atualize os itens com base na categoria selecionada
    setItens(categoriaItens);

    // Exibe a categoria para depuração
    console.log(categoriaItens);
  }

  return (
    <section className="w-full pt-[80px] pb-[190px]">
      <div className="flex justify-between w-[1170px] m-auto ">
        <ul className="flex flex-col gap-[35px]">
          {cardapio.map((categorias, index) => (
            <li className="text-[18px] font-medium text-letras2" key={index}>
              <div className="flex items-center gap-[23px]">
                <span
                  className={`block w-[18px] h-[2px] bg-letras2 ${selectedCategory === index ? "spanon" : ""
                    }`}
                ></span>
                <button
                  className={`duration-300 ${selectedCategory === index ? "categoriaon" : ""
                    }`}
                  onClick={() => mudarCategoria(index, categorias)}
                >
                  {categorias.Nome}
                </button>
              </div>
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-3 gap-[80px]">
          {itens.map((item) => (
            <li className="w-[223px] h-[222px] flex flex-col items-center">
              <div className="w-full h-full mb-[-10px]">
                <img
                  className="w-full h-full object-contain"
                  src={item.img}
                  alt="produto"
                />
              </div>
              <p className="font-medium text-[18px] text-center">{item.nome}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
