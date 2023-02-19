const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const containe = document.getElementById('containe');
let error = 0;

const form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();
	error = 0;
	checkInputs();
	if (error == 0) {
		CustomAlert.show();
		containe.style.opacity = 0;
	}
});

function checkInputs() {
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(nombreValue === '') {
		setErrorFor(nombre, 'Rellena este campo');
	} else if(/^[A-Za-z\s]*$/.test(nombreValue) != true) {
		setErrorFor(nombre, 'Sólo puede contener texto');
	} else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Rellena este campo');
	} else  if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email inválido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Rellena este campo');
	} else if(passwordValue.length > 8) {
		setErrorFor(password, 'No debe tener más de 8 caractéres');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Rellena este campo');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	error++;
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formulario-grupo error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formulario-grupo success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


const container = document.getElementById('dialog-container');
const CustomAlert = new function() {
	this.show = function() {
		let content = document.getElementById('dialog-body');
		container.style.top = '30%';
		container.style.opacity = 1;
	}

	this.close = function() {
		container.style.top = '-30%';
		container.style.opacity = 0;
	}
}