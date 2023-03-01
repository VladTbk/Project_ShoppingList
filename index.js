// Functions
const clearList = () => {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild);
	}
};

const createButton = (classes) => {
	const button = document.createElement('button');
	button.setAttribute('class', classes);
	return button;
};

const createIcon = (classes) => {
	const icon = document.createElement('i');
	icon.setAttribute('class', classes);
	return icon;
};

const clearItem = (e) => {
	if (itemList.firstChild) {
		e.target.classList.contains('icon-clear') === true
			? e.target.parentElement.parentElement.remove()
			: null;
	} else {
		return;
	}
};

const addItem = (e) => {
	e.preventDefault();
	itemValue = itemInput.value;

	if (itemValue === '') {
		alert('Please add item');
		return;
	}

	const li = document.createElement('li');
	li.appendChild(document.createTextNode(itemValue));

	const button = createButton('remove-item btn-link text-red');
	li.appendChild(button);

	const icon = createIcon('fa-solid fa-xmark icon-clear');
	button.appendChild(icon);

	itemList.appendChild(li);
	console.log(li);
};

// Main elements

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearButton = document.querySelector('#clear-button');

// Event Listiners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', clearItem);
clearButton.addEventListener('click', clearList);
