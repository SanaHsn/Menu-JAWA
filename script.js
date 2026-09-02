const categories = [
  {
    id: "coffee",
    label: "Coffee",
    title: "Coffee Classics",
    items: [
      { name: "Espresso", price: 45 },
      { name: "Americano", price: 50 },
      { name: "Cappuccino", price: 60 },
      { name: "Latte", price: 65 },
      { name: "Flat White", price: 65 },
      { name: "Cortado", price: 55 }
    ]
  },
  {
    id: "iced",
    label: "Iced",
    title: "Iced Coffee",
    items: [
      { name: "Iced Latte", price: 70 },
      { name: "Spanish Latte", price: 80 },
      { name: "Iced Americano", price: 60 },
      { name: "Coconut Iced Latte", price: 75 }
    ]
  },
  {
    id: "signature",
    label: "Signature",
    title: "Signature Drinks",
    items: [
      { name: "JAWA Signature", description: "Caramel, vanilla, double shot", price: 80 },
      { name: "Coconut Latte", description: "Coconut, espresso, milk", price: 75 },
      { name: "Pistachio Coffee", description: "Pistachio, white chocolate", price: 80 }
    ]
  },
  {
    id: "non-coffee",
    label: "Non Coffee",
    title: "Non Coffee",
    items: [
      { name: "Matcha Latte", price: 80 },
      { name: "Hot Chocolate", price: 70 },
      { name: "Iced Matcha", price: 85 }
    ]
  },
  {
    id: "desserts",
    label: "Desserts",
    title: "Desserts",
    items: [
      { name: "Cheesecake", price: 95 },
      { name: "Cookie", price: 55 },
      { name: "Brownie", price: 70 }
    ]
  },
  // {
  //   id: "new",
  //   label: "New",
  //   title: "New",
  //   items: [
  //     { name: "Seasonal Drink", description: "Example product — replace later", price: 85 }
  //   ]
  // },
  // {
  //   id: "sandwich",
  //   label: "Sandwich",
  //   title: "Sandwiches",
  //   temporaryImage: true,
  //   items: [
  //     { name: "Turkey & Cheese", price: 120 },
  //     { name: "Chicken Pesto", price: 135 }
  //   ]
  // }
];

const filtersEl = document.querySelector("#filters");
const menuContentEl = document.querySelector("#menuContent");

let activeCategory = "all";

function createFilterButtons() {
  const allButton = document.createElement("button");
  allButton.className = "filter-btn is-active";
  allButton.type = "button";
  allButton.dataset.category = "all";
  allButton.textContent = "All";
  filtersEl.appendChild(allButton);

  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "filter-btn";
    button.type = "button";
    button.dataset.category = category.id;
    button.textContent = category.label;
    filtersEl.appendChild(button);
  });
}

function createMenuItem(item) {
  return `
    <article class="menu-item">
      <div>
        <h3 class="item-name">${item.name}</h3>
        ${item.description ? `<p class="item-description">${item.description}</p>` : ""}
      </div>
      <div class="item-price">${item.price} <small>EGP</small></div>
    </article>
  `;
}

// Create a section for a category, including its title, items, and optional image.
function createCategorySection(category) {
  const hasImage = Boolean(category.image);

  return `
    <section class="category-section" id="${category.id}">
      <h2 class="category-title">${category.title}</h2>

      <div class="category-layout ${hasImage ? "" : "no-image"}">
        <div class="items">
          ${category.items.map(createMenuItem).join("")}
        </div>

        ${hasImage ? `
          <div class="category-media">
            <img
              class="category-photo"
              src="${category.image}"
              alt="${category.title}"
              loading="lazy"
            />
            ${category.temporaryImage
              ? `<p class="photo-note">Prototype image — replace later with a real JAWA product photo.</p>`
              : ""
            }
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function renderMenu(categoryId = "all") {
  activeCategory = categoryId;

  const visibleCategories =
    categoryId === "all"
      ? categories
      : categories.filter(category => category.id === categoryId);

  menuContentEl.innerHTML = visibleCategories.map(createCategorySection).join("");

  document.querySelectorAll(".filter-btn").forEach(button => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

filtersEl.addEventListener("click", event => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  renderMenu(button.dataset.category);

  // Keep the selected filter visible inside the horizontal scroller.
  button.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center"
  });
});

createFilterButtons();
renderMenu();
