let cardsDiv = document.querySelector(".cards");

async function fetchProjects() {
  try {
    let response = await fetch("../../projects.json");
    let projects = await response.json();
    
    for (let pro of projects) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.classList.add(`${pro.type}`);
      
      let cardBg = document.createElement("div");
      cardBg.classList.add("card-bg");
      cardBg.style.backgroundImage = `url(${pro.image})`;
      
      let cardInfo = document.createElement("div");
      cardInfo.classList.add("info");
      
      let titleDiv = document.createElement("div");
      titleDiv.classList.add("title");
      titleDiv.innerHTML = '<i class="las la-angle-double-up"></i>';
      
      let cardTitle = document.createElement("h4");
      let cardTitleNode = document.createTextNode(`${pro.title}`);
      cardTitle.appendChild(cardTitleNode);
      
      let moreDiv = document.createElement("div");
      moreDiv.classList.add("more");
      
      let title = document.createElement("h4");
      let titleNode = document.createTextNode(`${pro.title}`);
      title.appendChild(titleNode);
      
      let cardDesc = document.createElement("p");
      let cardDescNode = document.createTextNode(`${pro.desc}`);
      cardDesc.append(cardDescNode);
      
      let tagsDiv = document.createElement("div");
      tagsDiv.classList.add("tags");
      
      for (let tag of pro.tags) {
        let spanTag = document.createElement("span");
        let spanContent = document.createTextNode(`${tag}`);
        spanTag.append(spanContent);
        tagsDiv.appendChild(spanTag);
      }
      
      let iconsDiv = document.createElement("div");
      iconsDiv.classList.add("icons");
      
      let codeLink = document.createElement("a");
      codeLink.href = `${pro.code}`;
      codeLink.innerHTML = '<i class="fa-solid fa-code"></i>';
      codeLink.setAttribute("target", "_blank");
      let codeLinkNode = document.createTextNode(" Code");
      codeLink.appendChild(codeLinkNode);
      
      let websiteLink = document.createElement("a");
      websiteLink.href = `${pro.website}`;
      websiteLink.innerHTML = '<i class="fa-solid fa-link"></i>';
      websiteLink.setAttribute("target", "_blank");
      let websiteLinkNode = document.createTextNode(" Link");
      websiteLink.appendChild(websiteLinkNode);
      
      // Used for check if the project has a live link.
      if (pro.website != "") {
        iconsDiv.appendChild(websiteLink);
      }
      
      iconsDiv.appendChild(codeLink); 
      titleDiv.prepend(cardTitle);
      moreDiv.appendChild(title); moreDiv.appendChild(cardDesc);
      moreDiv.appendChild(tagsDiv); moreDiv.appendChild(iconsDiv);
      cardInfo.appendChild(titleDiv); cardInfo.appendChild(moreDiv);
      
      card.appendChild(cardBg);
      card.appendChild(cardInfo);
      cardsDiv.appendChild(card);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchProjects();

// works Filter
let lis = document.querySelectorAll(".container .content .shuffle li");

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    
    let cards = document.querySelectorAll(".container .content .cards .card");
    cards.forEach((card) => {
      card.style.display = "none";
    });
    document.querySelectorAll(e.currentTarget.dataset.type).forEach((div) => {
      div.style.display = "block";
    });
  });
});