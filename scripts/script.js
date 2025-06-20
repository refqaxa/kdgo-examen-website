document.addEventListener("DOMContentLoaded", () => {
// 1) inject header + footer
Promise.all([
    fetch("components/navbar.html").then(r => r.text()).then(html => document.getElementById("navbar").innerHTML = html),
    fetch("components/footer.html").then(r => r.text()).then(html => document.getElementById("footer").innerHTML = html)
]).then(() => {
    // 2) Hamburger menu logic
    const hamburger = document.getElementById('hamburger');
    const nav       = document.getElementById('my-nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', e => {
    e.stopPropagation();
    nav.classList.toggle('active');
    });
    document.addEventListener('click', e => {
    if (!nav.contains(e.target) && e.target !== hamburger) {
        nav.classList.remove('active');
    }
    });
});
});