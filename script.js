var contErro;

function validationName(name) {
	var exp_name = /[a-z]+/i;

	name_box = document.querySelector('.msg-name');
	if (name.value == "" || name.value.length < 3) {
		name_box.innerHTML = "Favor preencha o nome com no mínimo 3 caracteres";
		name_box.style.display = 'block';
		contErro += 1;
	} else if (!exp_name.test(name.value)) {
		name_box.innerHTML = "Favor insira somente letras";
		name_box.style.display = 'block';
		contErro += 1;
	} else {
		name_box.style.display = 'none';
	}
	return;
}

function validationLastName(lastName) {
	var exp_lastname = /[a-z]+/i;

	lastname_box = document.querySelector('.msg-lastname');
	if (lastName.value == "" || lastName.value.length < 5) {
		lastname_box.innerHTML = "Favor preencha o sobrenome com no mínimo 5 caracteres";
		lastname_box.style.display = 'block';
		contErro += 1;
	} else if (!exp_lastname.test(lastName.value)) {
		lastname_box.innerHTML = "Favor insira somente letras";
		lastname_box.style.display = 'block';
		contErro += 1;
	} else {
		lastname_box.style.display = 'none';
	}
	return;
}

function validationBirthOfDay(birthOfDay) {
	var exp_birthofday = /^(19[6-9][0-9]|20[0-2][0-9])(-|\/)(0[1-9]|1[0-2])(-|\/)(0[1-9]|[1-2][0-9]|3[0-1])/;	

	birthofday_box = document.querySelector('.msg-birthofday');
	if (birthOfDay.value == "") {
		birthofday_box.innerHTML = "Favor preencher o campo de data";
		birthofday_box.style.display = 'block';
		contErro += 1;
	} else if (exp_birthofday.test(birthOfDay.value)) {
		birthofday_box.style.display = 'none';
	} else {
		birthofday_box.innerHTML = "Favor preencher com uma data valida";
		birthofday_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationGender(gender) {
	gender_box = document.querySelector('.msg-gender');
	if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
		gender_box.innerHTML = "Favor selecionar o sexo";
		gender_box.style.display = 'block';
		contErro += 1;
	} else {
		gender_box.style.display = 'none';
	}
	return;
}

function validationEmail(email) {
	var exp_email = /^[a-z.\d]+@[a-z.]+\.(com)$/; 

	email_box = document.querySelector('.msg-email');
	if (email.value == "") {
		email_box.innerHTML = "Favor preencher o e-mail";
		email_box.style.display = 'block';
		contErro += 1;
	} else if (exp_email.test(email.value)) {
		email_box.style.display = 'none';
	} else {
		email_box.innerHTML = "Favor preencher com e-mail valido";
		email_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationTelephone(telephone) {
	var exp_telephone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;

	telephone_box = document.querySelector('.msg-telephone');
	if (telephone.value == "") {
		telephone_box.innerHTML = "Favor preencher o campo telefone";
		telephone_box.style.display = 'block';
		contErro += 1;
	} else if (exp_telephone.test(telephone.value)) {
		telephone_box.style.display = 'none';
	} else {
		telephone_box.innerHTML = "Favor preencher com um telefone valido";
		telephone_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationMessage(message) {
	message_box = document.querySelector('.msg-message');
	if (message.value == "" || message.value.length < 10) {
		message_box.innerHTML = "Favor preencha a menssagem com no mínimo 10 caracteres";
		message_box.style.display = 'block';
		contErro += 1;
	} else {
		message_box.style.display = 'none';
	}
	return;
}

function validationAddress(address) {
	var exp_address = /^([A-Z|a-z])([A-Z|a-z|\s])+,\s?\d+,([A-Z|a-z|\s])+,([A-Z|a-z|\s])+,\s*[A-Z]+$/;

	address_box = document.querySelector('.msg-address');
	if (address.value == "") {
		address_box.innerHTML = "Favor preencher o campo de endereço";
		address_box.style.display = 'block';
		contErro += 1;
	} else if (exp_address.test(address.value)) {
		address_box.style.display = 'none';
	} else {
		address_box.innerHTML = "Favor preencher com um endereço valido";
		address_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationCpf(cpf) {
	var exp_cpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

	cpf_box = document.querySelector('.msg-cpf');
	if (cpf.value == "") {
		cpf_box.innerHTML = "Favor preencher o campo de CPF";
		cpf_box.style.display = 'block';
		contErro += 1;
	} else if (exp_cpf.test(cpf.value)) {
		cpf_box.style.display = 'none';
	} else {
		cpf_box.innerHTML = "Favor preencher com um CPF valido";
		cpf_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationCep(cep) {
	var exp_cep = /^(\d{5}|\d{2}\.\d{3})-\d{3}$/;

	cep_box = document.querySelector('.msg-cep');
	if (cep.value == "") {
		cep_box.innerHTML = "Favor preencher o campo de CEP";
		cep_box.style.display = 'block';
		contErro += 1;
	} else if (exp_cep.test(cep.value)) {
		cep_box.style.display = 'none';
	} else {
		cep_box.innerHTML = "Favor preencher com um CEP valido";
		cep_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationUserName(userName) {
	var exp_username = /^[a-zA-Z\d]+$/;

	username_box = document.querySelector('.msg-username');
	if (userName.value == "") {
		username_box.innerHTML = "Favor preencher o campo de nome de usuário";
		username_box.style.display = 'block';
		contErro += 1;
	} else if (exp_username.test(userName.value)) {
		username_box.style.display = 'none';
	} else {
		username_box.innerHTML = "Favor preencher com um nome de usuário valido";
		username_box.style.display = 'block';
		contErro += 1;
	}
	return;
}

function validationPassword(password, rePassword) {

	password_box = document.querySelector('.msg-password');
	repassword_box = document.querySelector('.msg-repassword');
	if (password.value != rePassword.value) {
		password_box.innerHTML = "As senhas não são iguais";
		repassword_box.innerHTML = "As senhas não são iguais";
		password_box.style.display = 'block';
		repassword_box.style.display = 'block';
		contErro += 1;
	} else if (password.value == "" || password.length < 6) {
		password_box.innerHTML = "Favor preencher o campo de senha (com mínimo 6 de caracteres)";
		repassword_box.innerHTML = "Favor preencher o campo de senha (com mínimo 6 de caracteres)";
		password_box.style.display = 'block';
		repassword_box.style.display = 'block';
		contErro += 1;
	} else {
		password_box.style.display = 'none';
		repassword_box.style.display = 'none';
	}
	return;
}

function validationForm() {
	contErro = 0;

	validationName(document.getElementById('name'));
	validationLastName(document.getElementById('lastname'));
	validationBirthOfDay(document.getElementById('birthofday'));
	validationGender(document.getElementsByName('gender'));
	validationEmail(document.getElementById('email'));
	validationTelephone(document.getElementById('telephone'));
	validationMessage(document.getElementById('message'));
	validationAddress(document.getElementById('address'));
	validationCpf(document.getElementById('cpf'));
	validationCep(document.getElementById('cep'));
	validationUserName(document.getElementById('username'));
	validationPassword(document.getElementById('password'), document.getElementById('repassword'));

	if (contErro > 0) {
		return false;
	} else {
		return true;
	}
}

function showContent (id) {
	var element = document.getElementById(id)
	if (element.style.display == 'block') element.style.display = 'none'
	else element.style.display = 'block'
}