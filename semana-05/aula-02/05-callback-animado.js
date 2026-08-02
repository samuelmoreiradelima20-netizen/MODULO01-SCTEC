function loginUser(user, callback) {
   setTimeout(() => {
      console.log("1 - Usuário logado:", user);
      callback();
   }, 2000);
}

function loadOrders(callback) {
   setTimeout(() => {
      console.log("2 - Pedidos carregados");
      callback();
   }, 2000);
}

loginUser("Samuel", () => {
   loadOrders(() => {
      console.log("3 - Processo finalizado");
   });
});