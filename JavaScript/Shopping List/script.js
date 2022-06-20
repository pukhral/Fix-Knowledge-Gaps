'use strict';

//*********** Search for Items ***********
//Access the form and its input element
let search = document.forms['search-item'].querySelector('input');

search.addEventListener('keyup', e => {
  //Access the value that user has typed and convert it to lowercase
  let text = e.target.value.toLowerCase();
  //Grab ul
  let groceryList = document.querySelector('#grocery-list ul');
  //Grab list items
  let groceries = groceryList.getElementsByTagName('li');
  //Convert it into Array
  let groceriesArray = Array.from(groceries);

  //Loop over the groceries
  groceriesArray.forEach(grocery => {
    //Grab the first element child's text content
    let groceryName = grocery.firstElementChild.textContent;
    //Convert it into lowercase
    let groceryNameLower = groceryName.toLowerCase();
    //Check if the entered text can be found within our gorcery list
    if (groceryNameLower.indexOf(text) === -1) {
      //If nothing is found then hide the item
      grocery.style.display = 'none';
    } else {
      //If found, display them
      grocery.style.display = 'block';
    }
  });
});

// *********** Hide Items ***********
//Grab the checkbox
let checkbox = document.querySelector('#hide');
//If the checkbox is checked, listen for change event
checkbox.addEventListener('change', e => {
  //Grab the whole list
  let groceryList = document.getElementById('grocery-list');
  //Check whether the checkox is checked
  if (checkbox.checked) {
    // Hide the all the list
    groceryList.style.display = 'none';
  } else {
    //If not checked, display the list
    groceryList.style.display = 'block';
  }
});

// *********** Add Items ***********
// Access the form
let formAdd = document.getElementById('add-item');

formAdd.addEventListener('submit', e => {
  let ul = document.getElementsByTagName('ul')[0];
  // Do not refresh the page
  e.preventDefault();
  //Access what user has typed
  let text = formAdd.querySelector('input[type="text"]').value;
  //Clear the input box when submit event is fired
  formAdd.querySelector('input').value = null;
  //Creating the list items dynamically
  let li = document.createElement('li');
  let groceryName = document.createElement('span');
  let deleteButton = document.createElement('span');
  //Spans are nested within the li element
  li.appendChild(groceryName);
  li.appendChild(deleteButton);
  ul.appendChild(li);
  //Add text
  groceryName.textContent = text;
  deleteButton.textContent = 'Delete';
  //Add Classess
  groceryName.classList.add('name');
  deleteButton.classList.add('delete');
});

// *********** Delete Items ***********
//Grab ul elements
let groceryListUL = document.querySelector('#grocery-list ul');
//Add our event handler and executer remove handler
groceryListUL.addEventListener('click', remove);
function remove(e) {
  //Access the actual element that fired the event
  let targetElement = e.target;
  //Check if the target has the class name of delete
  if (targetElement.className === 'delete') {
    //Access its parent element
    let li = targetElement.parentElement;
    //Remove the parent element, which will also remove the child element
    li.remove();
  }
}

// *********** Tabs ***********
//Grab the headings and panel
let headings = document.querySelector('.heading');
let panels = document.querySelectorAll('.panel');
//
let selectedPanel = null;
headings.addEventListener('click', e => {
  // Check which element has triggered the evebt
  let targetElement = e.target;
  //Get the data attribute value
  let dataAttribute = e.target.dataset.clicked;

  if (targetElement.tagName === 'LI') {
    if (selectedPanel != null) {
      selectedPanel.classList.toggle('selected');
    }
    selectedPanel = targetElement;
    selectedPanel.classList.toggle('selected');

    let targetPanel = document.querySelector(dataAttribute);
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});
// ********* Answer Button ********
let answerButton = document.getElementById('showAnswer');
answerButton.addEventListener('click', answer);

function answer() {
  document.getElementById('answer').classList.add('show');
  document.getElementById('answer').textContent = 'AN IMPASTA';
  answerButton.style.display = 'none';
}
