// Get references to the buttons, dropdowns, and other elements
const searchOneButton = document.getElementById('searchOne');
const operatorDropdown = document.getElementById('operatorDropdown');
const fileTypeDropdown = document.getElementById('fileTypeDropdown');

// Function to execute search with one filter on
searchOneButton.addEventListener('click', () => {
  const query = prompt("Enter search query:");

  if (query) {
    searchWithOneFilter(query);
  }
});

// Perform search with one selected filter and file type
function searchWithOneFilter(query) {
  const selectedOperator = operatorDropdown.value;
  const selectedFileType = fileTypeDropdown.value;

  if (selectedOperator === "none" && selectedFileType === "none") {
    alert("Please select an operator or file type.");
    return;
  }

  let formattedQuery = query;

  // Add the selected operator if any
  if (selectedOperator !== "none") {
    formattedQuery = `${selectedOperator} ${query}`;
  }

  // Add the selected file type filter if any
  if (selectedFileType !== "none") {
    formattedQuery = `filetype:${selectedFileType} ${formattedQuery}`;
  }

  window.open(`https://www.google.com/search?q=${formattedQuery}`, '_blank');
}
