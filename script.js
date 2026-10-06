const categories = [
  {
    id: "coffee",
    label: "Coffee",
    title: "Coffee Classics",
    items: [
      { name: "Espresso", price: 50 },
      { name: "Americano", price: 65 },
      { name: "Cortado", price: 75 },
      { name: "Cappuccino", price: 80 },
      { name: "Latte", price: 80 },
      { name: "Flat White", price: 85 },
      { name: "Mocha", price: 85 },
      { name: "Spanish Latte", price: 90 },
      { name: "Caramel Macchiato", price: 90 },
    ],
  },
  {
    id: "iced",
    label: "Iced",
    title: "Iced Coffee",
    items: [
      { name: "Iced Americano", price: 100 },
      { name: "Iced Latte", price: 125 },
      { name: "Iced Spanish Latte", price: 125 },
      { name: "Iced Matcha", price: 125 },
      { name: "Coconut Iced Latte", price: 145 },
      { name: "Honey Black V60", price: 170 },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    title: "Signature Drinks",
    items: [
      {
        name: "JAWA Signature",
        description: "Biscoff, espresso, steamed milk, caramel",
        price: 150,
      },
      {
        name: "Oreo Latte",
        description: "Oreo, espresso, steamed milk ",
        price: 160,
      },
      {
        name: "Pistachio Coffee",
        description: "Espresso, pistachio, white chocolate, steamed milk",
        price: 180,
      },
      {
        name: "Honey Cinnamon Latte",
        description: "Espresso, cinnamon, steamed milk, honey",
        price: 180,
      },
      {
        name: "Tiramisu Latte",
        description: "Espresso,mascarpone, steamed milk, cocoa",
        price: 180,
      },
    ],
  },
  {
    id: "non-coffee",
    label: "Non Coffee",
    title: "Non-Coffee",
    items: [
      {
        name: "Moroccan Tea",
        description: "Green tea, fresh mint",
        price: 70,
      },
      {
        name: "Hot Chocolate",
        description: "Chocolate, steamed milk",
        price: 70,
      },
      {
        name: "Matcha Latte",
        description: "Matcha, steamed milk",
        price: 85,
      },
      {
        name: "Creamy Chocolate",
        description: "Chocolate, milk, cream",
        price: 85,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    title: "Desserts",
    items: [
      { name: "Waffle", price: 80 },
      { name: "Brownie", price: 90 },
    ],
  },
  {
    id: "cookies",
    label: "Cookies",
    title: "Cookies",
    items: [
      { name: "Dark Chocolate Cookie", price: 60 },
      { name: "Kinder Bueno Cookie", price: 90 },
      { name: "Brownie Cookie", price: 110 },
      { name: "Lotus Cookie", price: 110 },
      { name: "Pistachio Cookie", price: 120 },
    ],
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

  categories.forEach((category) => {
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

        ${
          hasImage
            ? `
          <div class="category-media">
            <img
              class="category-photo"
              src="${category.image}"
              alt="${category.title}"
              loading="lazy"
            />
            ${
              category.temporaryImage
                ? `<p class="photo-note">Prototype image — replace later with a real JAWA product photo.</p>`
                : ""
            }
          </div>
        `
            : ""
        }
      </div>
    </section>
  `;
}

function renderMenu(categoryId = "all") {
  activeCategory = categoryId;

  const visibleCategories =
    categoryId === "all"
      ? categories
      : categories.filter((category) => category.id === categoryId);

  menuContentEl.innerHTML = visibleCategories
    .map(createCategorySection)
    .join("");

  document.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  renderMenu(button.dataset.category);

  // Keep the selected filter visible inside the horizontal scroller.
  button.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
});

createFilterButtons();
renderMenu();

// Google Translate initialization function

// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "en",
//       autoDisplay: false,
//     },
//     "google_translate_element",
//   );
// }
