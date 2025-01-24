// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const translations = {
    en: {
        title : "Welcome!",
        select: "Select your language:",
        subti : "Welcome to the official website of TRON (Toll Road Network).",
        pargr: "Lorem ipsum dolor sit amet consectetur. Quod, esse!"
    },
    el: {
        title: "Καλώς ήλθατε!",
        select: "Επιλέξτε τη γλώσσα σας:",
        subti: "Καλώς ορίσατε στην επίσημη ιστοσελίδα του ΔΑΔ (Δίκτο Αυτοκινητοδρόμων).",
        pargr: "Θέλει αρετή και τόλμη η ελευθερία. (Ανδρέας Κάλβος)"
    },
    cs: {
        title: "Vítejte!",
        select: "Vyberte vás jazyk:",
        subti: "Vítejte na oficiální stránce SZS (Siť Zpoplatněných Silnic).",
        pargr: "Nechť již hříšné saxofony ďáblů rozzvučí síň úděsnými tóny waltzu, tanga a quickstepu."
    },
    de: {
        title: "Willkommen!",
        select: "Wählen Sie Ihre Sprache:",
        subti: "Herzlich Willkommen auf der offiziellen Webseite von MSN (Mautstraßennetz).",
        pargr: "Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich"
    },
    es: {
        title: "¡Bienvenidos!",
        select: "Elija su idioma:",
        subti: "Bienvenidos a la página oficial de la RCP (Red de Carreteras de Peaje).",
        pargr: "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."
    },
    fr: {
        title: "Bienvenue!",
        select: "Choisissez votre langue:",
        subti: "Bienvenue sur le site officiel du RRP (Réseau Routier à Péage).",
        pargr: "Portez ce vieux whisky au juge blond qui fume."
    },
    hr: {
        title: "Dobro došli!",
        select: "Odaberite jezik:",
        subti: "Dobro došli na službene web stranice MC-a (Mreža cestarina).",
        pargr: "Njoj pljačkom zgrćeš: tuđ CD, VHS, bež fildžan."
    },
    it: {
        title: "Benvenuti!",
        select: "Scelga la sua lingua:",
        subti: "Benvenuti sul sito ufficiale della RSP (Rete Stradale a Pedaggio).",
        pargr: "Ma la volpe, col suo balzo, ha raggiunto il quieto Fido."
    },
    pl: {
        title: "Witamy!",
        select: "Wybierz swój język:",
        subti: "Witamy Państwa na oficjalnej stronie internetowej SDP (Sieć Dróg Płatnych).",
        pargr: "Stróż pchnął kość w quiz gędźb vel fax myjń."
    },
    ro: {
        title: "Bine ați venit!",
        select: "Alegeți-vă limba:",
        subti: "Bine ați venit pe pagina web oficială a RDT (Rețeaua de Drumuri cu Taxă).",
        pargr: "Agera vulpe maronie sare peste câinele cel leneș."
    },
    ru: {
        title: "Добро пожаловать!",
        select: "Выберите язык:",
        subti: "Добро пожаловать на официальный сайт СПД (Сеть платных дорог).",
        pargr: "Съешь ещё этих мягких французских булок, да выпей же чаю."
    },
}

const languageSelectop = document.querySelector("select");
let title = document.getElementById("title");
let select = document.getElementById("select");
let subti = document.getElementById("subti");
let pargr = document.getElementById("pargr");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        title.innerText = translations.en.title;
        select.innerText = translations.en.select;
        subti.innerText = translations.en.subti;
        pargr.innerText = translations.en.pargr;
    }
    else if (language == "el") {
        title.innerText = translations.el.title;
        select.innerText = translations.el.select;
        subti.innerText = translations.el.subti;
        pargr.innerText = translations.el.pargr;
    }
    else if (language == "cs") {
        title.innerText = translations.cs.title;
        select.innerText = translations.cs.select;
        subti.innerText = translations.cs.subti;
        pargr.innerText = translations.cs.pargr;
    }
    else if (language == "de") {
        title.innerText = translations.de.title;
        select.innerText = translations.de.select;
        subti.innerText = translations.de.subti;
        pargr.innerText = translations.de.pargr;
    }
    else if (language == "es") {
        title.innerText = translations.es.title;
        select.innerText = translations.es.select;
        subti.innerText = translations.es.subti;
        pargr.innerText = translations.es.pargr;
    }
    else if (language == "fr") {
        title.innerText = translations.fr.title;
        select.innerText = translations.fr.select;
        subti.innerText = translations.fr.subti;
        pargr.innerText = translations.fr.pargr;
    }
    else if (language == "hr") {
        title.innerText = translations.hr.title;
        select.innerText = translations.hr.select;
        subti.innerText = translations.hr.subti;
        pargr.innerText = translations.hr.pargr;
    }
    else if (language == "it") {
        title.innerText = translations.it.title;
        select.innerText = translations.it.select;
        subti.innerText = translations.it.subti;
        pargr.innerText = translations.it.pargr;
    }
    else if (language == "pl") {
        title.innerText = translations.pl.title;
        select.innerText = translations.pl.select;
        subti.innerText = translations.pl.subti;
        pargr.innerText = translations.pl.pargr;
    }
    else if (language == "ro") {
        title.innerText = translations.ro.title;
        select.innerText = translations.ro.select;
        subti.innerText = translations.ro.subti;
        pargr.innerText = translations.ro.pargr;
    }
    else if (language == "ru") {
        title.innerText = translations.ru.title;
        select.innerText = translations.ru.select;
        subti.innerText = translations.ru.subti;
        pargr.innerText = translations.ru.pargr;
    }
}