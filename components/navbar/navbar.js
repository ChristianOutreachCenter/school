
const dumbHTMLText = () => {

    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Christian Outreach School</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Admissions</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
            </li>
            </ul>
        </div>
    </nav>
    `
}


const toggleNavbarButton = () => {
    const button = document.createElement("button");
    const span = document.createElement("span");
    button.classList.add("navbar-toggler");
    button.type = "button";
    // button["data-toggle"] = "collapse";
    // button["data-target"] = "#navbarNav";
    // button["aria-controls"] = "#navbarNav";
    // button["aria-expanded"] = "false";
    // button["aria-label"] = "Toggle navigation";
    span.classList.add("navbar-toggler-icon");
    button.appendChild(span);
    const div = document.createElement("div");
    div.innerHTML = "<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>";

    // return button;
    return div;

}

const createNavButton = (textContent) => {
    const classList = ['nav-item', 'active'];
    const classListATag = ['nav-link'];
    const lineItem = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerText = textContent;
    lineItem.classList.add(...classList);
    aTag.classList.add(...classListATag);

    lineItem.appendChild(aTag);
    return lineItem;
}

const navigationLinks = () => {
    const classList = ['navbar-nav']
    const unorderedList = document.createElement("ul");
    unorderedList.classList.add(...classList);
    unorderedList.appendChild(createNavButton("Home"));
    unorderedList.appendChild(createNavButton("About"));
    unorderedList.appendChild(createNavButton("Admission"));
    return unorderedList;
}

const navigationLinksContainer = () => {
    const classList = ['collapse', 'navbar-collapse'];
    const divContainer = document.createElement("div");
    divContainer.classList.add(...classList);
    divContainer.appendChild(navigationLinks());
    logo.id = "navbarNav"
    return divContainer;
}

const logo = () => {
    const classList = ['navbar-brand']
    const logo = document.createElement("a");
    logo.innerText = "logo";
    logo.classList.add(...classList);
    logo.setAttribute("href", "#");
    return logo;
}

const navbarHTML = () => {
    const classList = ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light'];
    const nav = document.createElement("nav");
    nav.classList.add(...classList);
    nav.appendChild(logo());
    nav.appendChild(toggleNavbarButton());
    nav.appendChild(navigationLinksContainer());
    return nav;
}

export function Navbar(rootAddress) {
    // const navbarHTML = `<div class='navbar-container'>Navbar <a href="${rootAddress}/index.html">button</a></div>`;
    const navbarContainer = document.getElementById('navbar');
    // navbarContainer.appendChild(navbarHTML());
    navbarContainer.innerHTML = dumbHTMLText();
}
