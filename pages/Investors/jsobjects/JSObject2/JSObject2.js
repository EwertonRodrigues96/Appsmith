// Evento onChange do campo de seleção
onSelectionChange: (selectedValue) => {
  // Lógica para obter dados com base na seleção, se necessário
  const newData = fetchDataBasedOnSelection(selectedValue);

  // Atualizar o valor do campo alvo com os dados obtidos
  updateFieldValue(newData);
}
