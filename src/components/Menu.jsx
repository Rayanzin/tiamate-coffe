import { useState } from "react";

const Menu = () => {
  const cardapio = [
    {
      Nome: "Lançamentos",
      MerryBerry: {
        nome: "Merry Berry",
        img: "./src/imgs/merry-berry.png",
      },
    },
    {
      Nome: "Expressos",
      Tradicional: {
        nome: "Tradicional",
        img: "./src/imgs/expresso-tradicional.png",
      },
      Americano: {
        nome: "Americano",
        img: "./src/imgs/expresso-americano.png",
      },
      Macchiato: {
        nome: "Macchiato",
        img: "./src/imgs/expresso-machiato.png",
      },
      Chantilly: {
        nome: "Chantilly",
        img: "./src/imgs/expresso-chantily.png",
      },
      Latte: {
        nome: "Latte",
        img: "./src/imgs/expresso-latte.png",
      },
    },
    {
      Nome: "Tiamatino Coffee",
      coffeebrigadeiro: {
        nome: "Tiamatino coffee brigadeiro",
        img: "./src/imgs/coffe-brigadeiro.png",
      },
      coffeecookie: {
        nome: "Tiamatino coffee cookie",
        img: "./src/imgs/coffe-cookie.png",
      },
      coffeecaramelo: {
        nome: "Tiamatino coffee caramelo",
        img: "./src/imgs/coffe-caramelo.png",
      },
      coffeetradicional: {
        nome: "Tiamatino coffee tradicional",
        img: "./src/imgs/coffe-tradicional.png",
      },
    },
    {
      Nome: "Tiamatino Cream",
      creammorango: {
        nome: "Tiamatino cream de morango",
        img: "./src/imgs/cream-morango.png",
      },
      creambaunilha: {
        nome: "Tiamatino cream de baunilha",
        img: "./src/imgs/cream-baunilha.png",
      },
      creamchocolate: {
        nome: "Tiamatino cream chocolate",
        img: "./src/imgs/cream-chocolate.png",
      },
      creamchurros: {
        nome: "Tiamatino cream de churros",
        img: "./src/imgs/cream-churros.png",
      },
    },
    {
      Nome: "Bebidas Italianas",
      StrawberrySoda: {
        nome: "Strawberry Soda",
        img: "./src/imgs/starberry-soda.png",
      },
      PonkanTangerineSoda: {
        nome: "Ponkan Tangerine Soda",
        img: "./src/imgs/ponkan.png",
      },
      GreenAppleSoda: {
        nome: "Green Apple Soda",
        img: "./src/imgs/green-apple.png",
      },
      PeachSoda: {
        nome: "Peach Soda",
        img: "./src/imgs/peach.png",
      },
    },
    {
      Nome: "Cappuccino",
      Tradicional: {
        nome: "Tradicional",
        img: "./src/imgs/café-tradicional.png",
      },
      baunilha: {
        nome: "Baunilha",
        img: "./src/imgs/baunilha.png",
      },
      avela: {
        nome: "Avelã",
        img: "./src/imgs/avela.png",
      },
      chocolatecomcanela: {
        nome: "Chocolate com canela",
        img: "./src/imgs/canela.png",
      },
      mocha: {
        nome: "Mocha",
        img: "./src/imgs/mocha.png",
      },
      caramelotiamate: {
        nome: "caramelo tiamate",
        img: "./src/imgs/caramelo.png",
      },
      chocolatecremoso: {
        nome: "Chocolate Clássico Cremoso",
        img: "./src/imgs/classico-cremoso.png",
      },
      lattetea: {
        nome: "Latte tea",
        img: "./src/imgs/latte-tea.png",
      },
      chocotea: {
        nome: "Choco Tea",
        img: "./src/imgs/choco-tea.png",
      },
    },
    {
      Nome: "Bebidas Geladas",
      IceTeaPessego: {
        nome: "Ice Tea Pêssego",
        img: "./src/imgs/ice-tea-pessego.jpg",
      },
      IceTeaLimao: {
        nome: "Ice Tea Limão",
        img: "./src/imgs/ice-tea-limao.jpg",
      },
      Sucode: {
        nome: "Laranja",
        img: "./src/imgs/suco-laranja.png",
      },
      SucodeUva: {
        nome: "Suco de Uva",
        img: "./src/imgs/suco-uva.jpg",
      },
      Águasemgas: {
        nome: "Água sem gás",
        img: "./src/imgs/agua.jpg",
      },
      Águacomgas: {
        nome: "Água com gás",
        img: "./src/imgs/agua-c-gas.jpg",
      },
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(2);

  const [itens, setItens] = useState([
    {
      nome: "Tiamatino coffee brigadeiro",
      img: "./src/imgs/coffe-brigadeiro.png",
    },
    {
      nome: "Tiamatino coffee cookie",
      img: "./src/imgs/coffe-cookie.png",
    },
    {
      nome: "Tiamatino coffee caramelo",
      img: "./src/imgs/coffe-caramelo.png",
    },
    {
      nome: "Tiamatino coffee tradicional",
      img: "./src/imgs/coffe-tradicional.png",
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
                  className={`block w-[18px] h-[2px] bg-letras2 ${
                    selectedCategory === index ? "spanon" : ""
                  }`}
                ></span>
                <button
                  className={`duration-300 ${
                    selectedCategory === index ? "categoriaon" : ""
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
              <div className="w-full h-full ml-[50px]">
                <img
                  className="w-full h-full object-cover"
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
