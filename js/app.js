// ======= FORMATAÇÃO DE CAMPOS =======

// CPF
function formatarCPF(cpf) {
  cpf.value = cpf.value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Telefone
function formatarTelefone(tel) {
  tel.value = tel.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{4})$/, '$1-$2');
}

// CEP
function formatarCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
}

// ======= VALIDAÇÃO DO FORMULÁRIO E NEWSLETTER =======

function validarFormulario(event) {
  event.preventDefault(); // impede o envio do form

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if (
    nome.value.trim() === '' ||
    email.value.trim() === '' ||
    cpf.value.trim() === '' ||
    telefone.value.trim() === '' ||
    cep.value.trim() === ''
  ) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return false;
  }

  if (!email.value.includes('@')) {
    alert('E-mail inválido!');
    return false;
  }

  alert('Cadastro realizado com sucesso! 🎉');
  document.getElementById('formCadastro').reset();
  return true;
}

// Função da Newsletter, que estava no seu HTML:
function handleNewsletter(event) {
    event.preventDefault(); // impede o recarregamento da página
    document.getElementById("mensagem-sucesso").style.display = "block";
    event.target.reset(); // limpa o campo de e-mail
}

// ======= APLICA AS FUNÇÕES AUTOMATICAMENTE =======

document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');
  const formCadastro = document.getElementById('formCadastro'); // Assumindo que você terá um ID 'formCadastro'
  const formNewsletter = document.getElementById('newsletter-form');

  if (cpf) cpf.addEventListener('input', () => formatarCPF(cpf));
  if (telefone) telefone.addEventListener('input', () => formatarTelefone(telefone));
  if (cep) cep.addEventListener('input', () => formatarCEP(cep));
  if (formCadastro) formCadastro.addEventListener('submit', validarFormulario);
  if (formNewsletter) formNewsletter.addEventListener('submit', handleNewsletter);
});
