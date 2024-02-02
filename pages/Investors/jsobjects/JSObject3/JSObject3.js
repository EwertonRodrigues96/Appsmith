export default {
// Evento onChange do campo de seleção
onSelectionChange: (selectedValue) => {
  // Executar a consulta no backend com base na seleção
  const queryResult = executeQuery(selectedValue);

  // Mapear os resultados para o segundo campo
  updateSecondField(queryResult);
}
}