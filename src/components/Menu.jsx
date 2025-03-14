const Menu = () => {
  const cardapio = [
    {
      Lancamentos: {
        Nome: "Lançamentos",
        MerryBerry: {
          Nome: "Merry Berry",
          img: "./src/imgs/merry-berry.png",
        },
      },
      Expressos: {
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
      Coffee: {
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
      TiamatinoCream: {
        Nome: "Tiamatino Cream",
        creammorango: {
          nome: "Tiamatino cream de morango",
          img: "./src;imgs/cream-morango.png",
        },
        creambaunilha: {
          nome: "Tiamatino cream de baunilha",
          img: "./src;imgs/cream-baunilha.png",
        },
        creamchocolate: {
          nome: "Tiamatino cream chocolate",
          img: "./src;imgs/cream-chocolate.png",
        },
        creamchurros: {
          nome: "Tiamatino cream de churros",
          img: "./src;imgs/cream-churros.png",
        },
      },
      BebidasItalianas: {
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
      Cappuccino: {
        Nome: "Cappuccino",
        Tradicional: {
          nome: "Tradicional",
          img: "./src/imgs/café-tradicional.png",
        },
        baunilha: {
          nome: "Baunilha",
          img: "./src/imgs/baunilha.png",
        },
        chocolatecomcanela: {
          nome: "Chocolate com canela",
          img: "./src/imgs/canela.png",
        },
        avela: {
          nome: "Avelã",
          img: "./src/imgs/avela.png",
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
      BebidasGeladas: {
        Nome: "Bebidas Geladas",
        IceTeaPessego: {
          nome: "Ice Tea Pêssego",
          img: "./src/imgs/ice-tea-pessego.png",
        },
        IceTeaLimao: {
          nome: "Ice Tea Limão",
          img: "./src/imgs/ice-tea-pessego.png",
        },
        Sucode: {
          nome: "Laranja",
          img: "./src/imgs/ice-tea-pessego.png",
        },
        SucodeUva: {
          nome: "Suco de Uva",
          img: "./src/imgs/ice-tea-pessego.png",
        },
        Águasemgas: {
          nome: "Água sem gás",
          img: "./src/imgs/ice-tea-pessego.png",
        },
        Águacomgas: {
          nome: "Água com gás",
          img: "./src/imgs/ice-tea-pessego.png",
        },
      },
    },
  ];
  console.log(cardapio);

  return (
    <section className="w-full">
      <ul className="w-[500px] h-[400px]">
        {cardapio.map((categorias) => (
          <>
          
          </>
        ))}
      </ul>
      <ul></ul>
    </section>
  );
};

export default Menu;
