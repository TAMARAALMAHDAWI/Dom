
document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('addItemForm');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');
  
    // Add item to the list
    addItemForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const itemValue = itemInput.value.trim();
  
      if (itemValue) {
        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;
  
        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          listItem.remove();
        });
  
        // Add delete button to list item
        listItem.appendChild(deleteButton);
  
        // Add list item to the list
        itemList.appendChild(listItem);
  
        // Clear input and focus
        itemInput.value = '';
        itemInput.focus();
      }
    });
});