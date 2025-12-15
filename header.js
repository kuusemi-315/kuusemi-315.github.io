function initHeaderMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav__wrapper");
  const body = document.body;
  const icon = toggle?.querySelector("img");

  if (!toggle || !nav) return;

  /* ===== ハンバーガーメニュー制御のみ ===== */
  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("no-scroll", isOpen);

    // ✕ / ハンバーガー 切り替え
    if (icon) {
      icon.src = isOpen
        ? "images/close.png"
        : "images/hamburger.png";
    }

    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}
