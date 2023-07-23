let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

//sticky header
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // Your code to handle the sections goes here...
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
