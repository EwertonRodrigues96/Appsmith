export default {
// Evento de clique de botão para acionar a ação
onButtonClick: () => {
  // Executar a consulta SQL no backend
  const queryResult = runQuery({
    name: "SuaConsulta", // Substitua pelo nome real da sua consulta
    parameters: {
      // Se houver parâmetros, configure-os aqui
    },
  });

  // Mapear o resultado para o campo de destino usando "Set Control Property"
  $set("campoDestino", queryResult[0].nomeDoCampo);
}

}