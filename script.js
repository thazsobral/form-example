var contErro = 0;

function validationName (name) {
  name_box = document.querySelector('.msg-name');
  if (name.value == "") {
      name_box.innerHTML = "Favor preencha o nome";
      name_box.style.display = 'block';
      contErro += 1;
  } else if (name.value.length < 3) {
      name_box.innerHTML = "Favor preencha o nome com no mínimo 3 caracteres";
      name_box.style.display = 'block';
      contErro += 1;
  } else {
      name_box.style.display = 'none';
  }
  return;
}

function validationLastName (lastName) {
  lastname_box = document.querySelector('.msg-lastname');
  if (lastName.value == "") {
      lastname_box.innerHTML = "Favor preencha o sobrenome";
      lastname_box.style.display = 'block';
      contErro += 1;
  } else if (lastName.value.length < 5) {
      lastname_box.innerHTML = "Favor preencha o sobrenome com no mínimo 5 caracteres";
      lastname_box.style.display = 'block';
      contErro += 1;
  } else {
      lastname_box.style.display = 'none';
  }
  return;
}

function validationGender (gender) {
  gender_box = document.querySelector('.msg-gender');
  if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false ) {
      gender_box.innerHTML = "Favor selecionar o sexo";
      gender_box.style.display = 'block';
      contErro += 1;
  }else {
      gender_box.style.display = 'none';
  }
  return;
}

function validationEmail (email) {
  var exp_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

  email_box = document.querySelector('.msg-email');
  if (email.value == ""){
      email_box.innerHTML = "Favor preencher o e-mail";
      email_box.style.display = 'block';
      contErro += 1;
  } else if(exp_email.match(email.value)){
      email_box.style.display = 'none';
  } else {
      email_box.innerHTML = "Favor preencher com e-mail valido";
      email_box.style.display = 'block';
      contErro += 1;
  }
  return;
}

function validationTelephone (telephone) {
  var exp_telephone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;

  telephone_box = document.querySelector('.msg-telephone');
  if (telephone.value == ""){
      telephone_box.innerHTML = "Favor preencher o campo telefone";
      telephone_box.style.display = 'block';
      contErro += 1;
  } else if(exp_telephone.test(telephone.value)){
      telephone_box.style.display = 'none';
  } else {
      telephone_box.innerHTML = "Favor preencher com um telefone valido";
      telephone_box.style.display = 'block';
      contErro += 1;
  }
  return;
}

function validationBirthOfDay (birthOfDay) {
    var exp_birthofday = /^[1-12]{1,2}\/[1-30]{1,2}\/(\d){2,4}/;

    birthofday_box = document.querySelector('.msg-birthofday');
    if (birthOfDay.value == ""){
        birthofday_box.innerHTML = "Favor preencher o campo de data";
        birthofday_box.style.display = 'block';
        contErro += 1;
    } else if(exp_birthofday.test(birthOfDay.value)){
        birthofday_box.style.display = 'none';
    } else {
        birthofday_box.innerHTML = "Favor preencher com uma data valido";
        birthofday_box.style.display = 'block';
        contErro += 1;
    }
    return;
}

function validationMessage (message) {
    message_box = document.querySelector('.msg-message');
    if (message.value == ""){
        message_box.innerHTML = "Favor preencher o campo de mensagem";
        message_box.style.display = 'block';
        contErro += 1;
    } else {
        address_box.style.display = 'none';
    }
    return;
}

function validationAddress (address) {
    var exp_address = /^[A-Z]([a-z]|[\w])*,[0-9]*,[A-Z]([a-z]|[\w])*,[A-Z]([a-z]|[\w])*,[A-Z]{2}/;

    address_box = document.querySelector('.msg-address');
    if (address.value == ""){
        address_box.innerHTML = "Favor preencher o campo de endereço";
        address_box.style.display = 'block';
        contErro += 1;
    } else if(exp_address.test(address.value)){
        address_box.style.display = 'none';
    } else {
        address_box.innerHTML = "Favor preencher com um endereço valido";
        address_box.style.display = 'block';
        contErro += 1;
    }
    return;
}

function validationCpf (cpf) {
    var exp_cpf = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;

    cpf_box = document.querySelector('.msg-cpf');
    if (cpf.value == ""){
        cpf_box.innerHTML = "Favor preencher o campo de CPF";
        cpf_box.style.display = 'block';
        contErro += 1;
    } else if(exp_cpf.test(cpf.value)){
        cpf_box.style.display = 'none';
    } else {
        cpf_box.innerHTML = "Favor preencher com um CPF valido";
        cpf_box.style.display = 'block';
        contErro += 1;
    }
    return;
}

function validationCep (cep) {
    var exp_cep = /^[0-9]{5}-[0-9]{3}$/;

    cep_box = document.querySelector('.msg-cep');
    if (cep.value == ""){
        cep_box.innerHTML = "Favor preencher o campo de CEP";
        cep_box.style.display = 'block';
        contErro += 1;
    } else if(exp_cep.test(cep.value)){
        cep_box.style.display = 'none';
    } else {
        cep_box.innerHTML = "Favor preencher com um CEP valido";
        cep_box.style.display = 'block';
        contErro += 1;
    }
    return;
}

function validationUserName (userName) {
    var exp_username = /([a-z]|[A-Z]|[0-9])+/;

    username_box = document.querySelector('.msg-username');
    if (userName.value == ""){
        username_box.innerHTML = "Favor preencher o campo de nome de usuário";
        username_box.style.display = 'block';
        contErro += 1;
    } else if(exp_username.test(userName.value)){
        username_box.style.display = 'none';
    } else {
        username_box.innerHTML = "Favor preencher com um nome de usuário valido";
        username_box.style.display = 'block';
        contErro += 1;
    }
    return;
}

function validationPassword (password, rePassword) {
    var exp_password = /^([a-z]|[A-Z]|[0-9]|\w)([a-z]|[A-Z]|[0-9]|\w){5,}/;

    password_box = document.querySelector('.msg-password');
    repassword_box = document.querySelector('.msg-repassword');
    if (password.value != rePassword.value) {
        password_box.innerHTML = "As senhas não são iguais";
        password_box.style.display = 'block';
        repassword_box.innerHTML = "Favor preencher o campo de CPF";
        repassword_box.style.display = 'block';
        contErro += 1;
    }

    if (password.value == "" || password.length < 6){
        password_box.innerHTML = "Favor preencher o campo de senha (com mínimo 6 de caracteres)";
        password_box.style.display = 'block';
        contErro += 1;
    } else if(exp_password.test(password.value)){
        password_box.style.display = 'none';
        repassword_box.style.display = 'none';
    } else {
        password_box.innerHTML = "Favor preencher com uma CPF valido";
        password_box.style.display = 'block';
        contErro += 1;
    }

    return;
}

function validationForm() {

  validationName(document.getElementById('name'));
  validationLastName(document.getElementById('lastname'));
  validationGender(document.getElementsByName('gender'));
  validationEmail(document.getElementById('email'));
  validationTelephone(document.getElementById('telephone'));
  validationBirthOfDay(document.getElementById('birthofday'));
  validationMessage(document.getElementById('message'));
  validationAddress(document.getElementById('address'));
  validationCpf(document.getElementById('cpf'));
  validationCep(document.getElementById('cep'));
  validationUserName(document.getElementById('username'));
  validationPassword(document.getElementById('password'), document.getElementById('repassword'))

    if (contErro > 0) {
        return false;
    } else {
        return true
    }
}