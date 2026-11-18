const categories = [
  {
    id: "coffee",
    label: "Coffee",
    title: "Coffee Classics",
    items: [
      { name: "Turkish Coffee", price: 40 },
      { name: "Espresso", price: "50" },
      { name: "Americano", price: 85 },
      { name: "Cortado", price: 95 },
      { name: "Cappuccino", price: 100 },
      { name: "Latte", price: 100 },
      { name: "Flat White", price: 110 },
      { name: "Mocha", price: 125 },
      { name: "Spanish Latte", price: 120 },
      { name: "Caramel Macchiato", price: 135 },
    ],
  },
  {
    id: "iced",
    label: "Iced",
    title: "Iced Coffee",
    items: [
      { name: "Iced Americano", price: 100 },
      { name: "Iced Latte", price: 110 },
      { name: "Iced Spanish Latte", price: 120 },
      { name: "Coconut Iced Latte", price: 140 },
      { name: "V60", price: 170 },
    ],
  },
  {
    id: "matcha",
    label: "Matcha",
    title: "Matcha Drinks",
    items: [
      {
        name: "Hot Matcha",
        description: "Matcha, steamed milk",
        price: 90,
      },
      { name: "Iced Matcha", price: 110 },
      {
        name: "Matcha Latte",
        description: "Matcha, steamed milk",
        price: 90,
      },

    ],
  },
  {
    id: "frappuccino",
    label: "Frappuccino",
    title: "Frappuccino",
    items: [
      {
        name: "Frappuccino",
        description:
          "Flavors: Vanilla · Caramel · Mocha · Matcha · Salted Caramel · White Mocha",
        price: 150,
      },
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
        price: 50,
      },
      {
        name: "Hot Chocolate",
        description: "Chocolate, steamed milk",
        price: 90,
      },
      {
        name: "Creamy Chocolate",
        description: "Chocolate, milk, cream",
        price: 100,
      },
    ],
  },
  // {
  //   id: "desserts",
  //   label: "Desserts",
  //   title: "Desserts",
  //   items: [
  //     { name: "Waffle", price: 80 },
  //     { name: "Brownie", price: 90 },
  //   ],
  // },
  {
    id: "cookies",
    label: "Cookies",
    title: "Cookies",
    items: [
      { name: "Dark or White Chocolate Cookie", price: 100 },
      { name: "Kinder Bueno Cookie", price: 130 },
      // { name: "Brownie Cookie", price: 110 },
      { name: "Lotus Cookie", price: 130 },
      { name: "Pistachio Cookie", price: 130 },
    ],
  },

  {
    id: "sandwich",
    label: "Toasts",
    title: "Open Toasts",
    temporaryImage: true,
    items: [
      // {
      //   name: "Smoked Cheese Toast",
      //   description: "Mozzarella, cheddar, smoked Roumy cheese, oregano.",
      //   price: 110,
      // },
      {
        name: "Tuna Toast",
        description: "Tuna, sweet corn, mayonnaise, parsley, dill, lemon.",
        price: 170,
      },
      {
        name: "Pastrami Toast",
        description: "Pastrami, cheddar, pickles, sour cream.",
        price: 330,
      },
      {
        name: "Smoked Salmon Toast",
        description: "Smoked salmon, cream cheese, avocado, dill.",
        price: 280,
      },

      {
        name: "Egg & Cheese Toast",
        description: "Egg, cheddar cheese, mozzarella, black pepper.",
        price: 165,
      },

      {
        name: "Extra Egg",
        description: "Add an egg to any toast.",
        price: 20,
      },
    ],
  },
  {
    id: "savory-waffles",
    label: "Savory Waffles",
    title: "Savory Waffles",
    temporaryImage: true,
    items: [
      {
        name: "Cheese Waffle",
        description: "Egg, cheddar cheese, mozzarella, black pepper.",
        price: 220,
      },
      {
        name: "Tuna Waffle",
        description: "Tuna, sweet corn, mayonnaise, parsley, dill, lemon.",
        price: 235,
      },
      {
        name: "Pastrami Waffle",
        description: "Pastrami, cheddar, pickles, sour cream.",
        price: 380,
      },
      {
        name: "Smoked Salmon Waffle",
        description: "Smoked salmon, cream cheese, avocado, dill.",
        price: 350,
      },
    ],
  },
  {
    id: "sweet-waffles",
    label: "Sweet Waffles",
    title: "Sweet Waffles",
    temporaryImage: true,
    items: [
      { name: "Plain Waffle", description: "Served with powdered sugar.", price: 70 },
      {
        name: "Waffle with Sauce",
        description:
          "Choice your flavor: Dark Chocolate, White Chocolate, Pistachio or Caramel.",
        price: 110,
      },
      {
        name: "Kunafa Pistachio Waffle",
        description: "Kunafa, pistachio cream, crushed pistachios.",
        price: 270,
      },
    ],
  },
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
