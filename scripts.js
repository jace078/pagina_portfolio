// Array met sectienamen en bijbehorende IDs
const sectionData = [
    { name: 'Wie ben ik?', id: 'intro' },
    { name: 'Mijn werk', id: 'work' },
    { name: 'Codeertalen', id: 'languages' },
    { name: 'Socials', id: 'socials' },
];

// Selecteer de zijbalk en voeg links toe
const sidebar = document.getElementById('sidebar');

sectionData.forEach(section => {
    const link = document.createElement('a');
    link.textContent = section.name;
    link.href = `#${section.id}`;
    sidebar.appendChild(link);
});

// Voeg event listener toe voor soepel scrollen naar de secties
sidebar.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
});

// Voeg event listener toe om de zijbalk naar voren te schuiven bij hover
let timer;

sidebar.addEventListener('mouseenter', function () {
    timer = setTimeout(function () {
        sidebar.style.left = '0';
    }, 1000); // 1000 milliseconden (1 seconde)
});

sidebar.addEventListener('mouseleave', function () {
    clearTimeout(timer);
    sidebar.style.left = '-50px'; // Terug naar de oorspronkelijke positie
});

let isOpen = false;

sidebar.addEventListener('mouseenter', function () {
    if (!isOpen) {
        sidebar.style.left = '0';
        isOpen = true;
    }
});

sidebar.addEventListener('mouseleave', function () {
    if (isOpen) {
        sidebar.style.left = `-${sidebar.clientWidth - 10}px`; /* Verberg de zijbalk met een beetje zichtbaarheid */

        // Wacht op het voltooien van de overgang en reset dan isOpen en de positie
        setTimeout(function () {
            isOpen = false;
            sidebar.style.left = `-${sidebar.clientWidth - 10}px`;
        }, 300); // 300 milliseconden, overeenkomstig met de overgangstijd
    }
});

// Scroll-functionaliteit
window.addEventListener('scroll', function () {
    var content = document.getElementById('content');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > content.offsetTop + content.offsetHeight * currentTabIndex) {
        currentTabIndex++;
        if (currentTabIndex < tabsData.length) {
            tabContent.innerHTML = tabsData[currentTabIndex].content;
        }
    } else if (scrollTop < content.offsetTop + content.offsetHeight * (currentTabIndex - 1)) {
        currentTabIndex--;
        if (currentTabIndex >= 0) {
            tabContent.innerHTML = tabsData[currentTabIndex].content;
        }
    }
});

// Voeg event listener toe om de zijbalk te verbergen wanneer de cursor buiten de zijbalk is
document.addEventListener('mousemove', function (e) {
    if (isOpen && e.clientX > sidebar.clientWidth) {
        sidebar.style.left = `-${sidebar.clientWidth - 70}px`; /* Verberg de zijbalk met een beetje zichtbaarheid */

        // Wacht op het voltooien van de overgang en reset dan isOpen en de positie
        setTimeout(function () {
            isOpen = false;
            sidebar.style.left = `-${sidebar.clientWidth - 70}px`;
        }, 300); // 300 milliseconden, overeenkomstig met de overgangstijd
    }
});

// Voeg event listener toe aan de header om de zijbalk te laten verschijnen bij klik
const header = document.querySelector('header');

header.addEventListener('click', function () {
    if (!isOpen) {
        sidebar.style.left = '0';
        isOpen = true;
    } else {
        sidebar.style.left = `-${sidebar.clientWidth - 10}px`; /* Verberg de zijbalk met een beetje zichtbaarheid */

        // Wacht op het voltooien van de overgang en reset dan isOpen en de positie
        setTimeout(function () {
            isOpen = false;
            sidebar.style.left = `-${sidebar.clientWidth - 10}px`;
        }, 300); // 300 milliseconden, overeenkomstig met de overgangstijd
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var stylesheet = document.getElementById('stylesheet');
    
    function toggleCSS() {
        if (stylesheet.getAttribute('href') === 'style_pagina.css') {
            stylesheet.setAttribute('href', 'style_pagina2.css');
        } else {
            stylesheet.setAttribute('href', 'style_pagina.css');
        }
    }

    // Hieronder kun je een knop toevoegen en eraan koppelen
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', toggleCSS);
});
