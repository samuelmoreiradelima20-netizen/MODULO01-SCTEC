class User {
  constructor(name) {
     this.name = name
  }
  login() {
    console.log(`${this.name} entrou no sistema!`)

  }
}
class Student extends user {
   constructor(name, course) {
    super(name)
    this.course = course
   }
   showCourse() {
    console.log (` ${this.name} esta matriculado em ${this.course}`)
   }
}
  const studentA = new student("samuel", "TI")
  studentA.login()