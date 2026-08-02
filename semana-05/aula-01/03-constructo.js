class Player {
  constructor(n, s) {
      this.name = n
      this.score = s 

  }
showScore() {
   console.log(`${this.name} tem ${this.score} pontos`)
    }
}

const player1 = new Player("bruna", 755)


player1.showScore()