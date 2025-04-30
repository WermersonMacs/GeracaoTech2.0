let pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Desenvolvedor",
  falar: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

pessoa.falar(); // Saída: Olá, meu nome é João
