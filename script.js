function createLeaves() {
  const leaves = document.querySelector(".leaves");
  for (let i = 0; i < 10; i++) {
    const leaf = document.createElement("img");
    leaf.src = "flower1.png";
    leaf.classList.add("leaf");
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 8 + Math.random() * 4 + "s";
    leaves.appendChild(leaf);
  }
}

function redirectToFirstPage()
{
  window.location = "firstpage.html";
}