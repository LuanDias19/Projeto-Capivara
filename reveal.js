// Animações com ScrollReveal
ScrollReveal().reveal(".conteudo-principal", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  delay: 200,
  easing: "ease-out",
  reset: false,
});

ScrollReveal().reveal(".conteudo-secundario", ".card", {
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 300,
  easing: "ease-out",
  reset: false,
  viewFactor: 0.1,
  opacity: 1,
});

// Lógica do formulário
const form = document.getElementById("form-capivara");
const mensagem = document.getElementById("mensagem-obrigado");
const botao = document.getElementById("botao-enviar");

if (form && mensagem) {
  form.addEventListener("input", function () {
    if (botao) {
      botao.disabled = !form.checkValidity();
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.style.display = "none";
    mensagem.style.display = "block";
  });

  form.addEventListener("reset", function () {
    mensagem.style.display = "none";
    if (botao) botao.disabled = true;
  });
}

// Abrir/fechar a caixa de contato
const contatoLink = document.querySelector('a[href="#contato"]');
const caixaContato = document.getElementById("caixa-contato");

if (contatoLink && caixaContato) {
  // Estilo de transição suave
  caixaContato.style.transition = "all 0.4s ease";

  contatoLink.addEventListener("click", function (e) {
    e.preventDefault();
    const isVisible = caixaContato.style.display === "block";
    caixaContato.style.display = isVisible ? "none" : "block";
    contatoLink.setAttribute("aria-expanded", !isVisible);
  });
}

// Menu sanduíche (caso esteja usando)
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    const isExpanded = menu.classList.contains("active");
    toggle.setAttribute("aria-expanded", isExpanded);
  });
}
