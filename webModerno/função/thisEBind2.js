function Pessoa() {
  this.idade = 0;

  const self = this; // com isso, pode substituir o this por self
  setInterval(function(){
    self.idade++;
    console.log(self.idade);
  }/*.bind(self)*/, 1000); // dispara outra função a particr de um determinado intervalo que foi passado
};

new Pessoa;