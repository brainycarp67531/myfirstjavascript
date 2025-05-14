const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
	switch (choice.toLowerCase()) {
	
	case "white":
		update("black", "white");
	
	default:
		update("white", "black");
	}
	
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}