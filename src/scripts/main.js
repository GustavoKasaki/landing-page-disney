document.addEventListener('DOMContentLoaded', function() {
    const dropmenu = document.querySelector('[data-nav-button]')
    const list = document.querySelector('[data-nav-list]')

    dropmenu.addEventListener('click', () => {
        list.classList.toggle('show');
    })

    const input = document.querySelector('[data-form-input]')
    const btn = document.querySelector('[data-form-btn]')

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        input.classList.toggle('show-search');
    })

})