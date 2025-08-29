const patterns = [
  {
    id: 1,
    name: "Granny Square Blanket",
    difficulty: "Beginner",
    description: "A classic crochet granny square blanket you can scale to any size.",
    image: "https://picsum.photos/seed/granny/600/400"
  },
  {
    id: 2,
    name: "Crochet Amigurumi Bunny",
    difficulty: "Intermediate",
    description: "Cute bunny toy using amigurumi technique with single crochet rounds.",
    image: "https://picsum.photos/seed/bunny/600/400"
  },
  {
    id: 3,
    name: "Crochet Tote Bag",
    difficulty: "Advanced",
    description: "Stylish handmade crochet tote bag with sturdy base and handles.",
    image: "https://picsum.photos/seed/tote/600/400"
  },
  {
    id: 4,
    name: "Cozy Beanie Hat",
    difficulty: "Beginner",
    description: "Warm beanie worked in the round; quick weekend project.",
    image: "https://picsum.photos/seed/beanie/600/400"
  },
  {
    id: 5,
    name: "Lacy Shawl",
    difficulty: "Intermediate",
    description: "Lightweight triangular shawl with openwork lace pattern.",
    image: "https://picsum.photos/seed/shawl/600/400"
  }
];

const grid = document.getElementById("patternGrid");
const searchBar = document.getElementById("searchBar");

function patternCard(p) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <div class="card-content">
      <span class="pill">${p.difficulty}</span>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    </div>
  `;
  return div;
}

function render(list) {
  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML = '<p>No patterns found.</p>';
    return;
  }
  list.forEach(p => grid.appendChild(patternCard(p)));
}

render(patterns);

// Search
searchBar.addEventListener("input", (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = patterns.filter(p => p.name.toLowerCase().includes(q));
  render(filtered);
});
