document.addEventListener("DOMContentLoaded", () => {
  
  /* ========== Atualiza Ano ========== */
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
  
  /* ========== Menu Mobile ========== */
  const menuBtn = document.querySelector(".hamburger");
  const nav = document.querySelector("nav ul");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.background = "#ffffffee";
      nav.style.padding = "20px";
      nav.style.borderRadius = "12px";
      nav.style.position = "absolute";
      nav.style.top = "70px";
      nav.style.right = "10px";
    });
  }

  /* ========== Máscaras ========== */
  function mask(el, fn) {
    el.addEventListener("input", e => e.target.value = fn(e.target.value));
  }

  const cpf = v => v.replace(/\D/g,"").replace(/(\d{3})(\d)/, "$1.$2")
                   .replace(/(\d{3})(\d)/, "$1.$2")
                   .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  const tel = v => v.replace(/\D/g,"").replace(/(\d{2})(\d)/, "($1) $2")
                    .replace(/(\d{5})(\d{4})$/, "$1-$2");

  const cep = v => v.replace(/\D/g,"").replace(/(\d{5})(\d{3})$/, "$1-$2");

  const cpfEl = document.getElementById("cpf");
  const telEl = document.getElementById("telefone");
  const cepEl = document.getElementById("cep");

  if (cpfEl) mask(cpfEl, cpf);
  if (telEl) mask(telEl, tel);
  if (cepEl) mask(cepEl, cep);

  /* ========== Validação Form ========== */
  const form = document.getElementById("cadastroForm");

  if (form) {
    form.addEventListener("submit", e => {
      if (!form.checkValidity()) {
        e.preventDefault();
        form.querySelectorAll("input").forEach(i =>
          !i.checkValidity() ? i.classList.add("invalid") : i.classList.remove("invalid")
        );
        alert("Verifique os campos destacados ❗");
      } else {
        e.preventDefault();
        form.reset();
        alert("Cadastro enviado com sucesso ✅");
      }
    });
  }
});
