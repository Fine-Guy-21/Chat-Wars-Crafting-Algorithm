const crafts = {
  // RAGES
  "Vial of Rage": {
    id: "p01",
    name: "Vial of Rage",
    craft_lvl: 1,
    ingredients: {
      "Sun Tarragon": 1,
      "Storm Hyssop": 1,
    },
  },
  "Potion of Rage": {
    id: "p02",
    name: "Potion of Rage",
    craft_lvl: 2,
    ingredients: {
      "Assassin Vine": 1,
      "Plasma of Abyss": 1,
      "Storm Hyssop": 2,
    },
  },
  "Bottle of Rage": {
    id: "p03",
    name: "Bottle of Rage",
    craft_lvl: 3,
    ingredients: {
      "Assassin Vine": 2, //76
      "Plasma of Abyss": 1, //38
      "Wolf Root": 1, //38
      "Spring Bay Leaf": 1, //38
    },
  },

  // PEACE
  "Vial of Peace": {
    id: "p04",
    name: "Vial of Peace",
    craft_lvl: 1,
    ingredients: {
      "Stinky Sumac": 1,
      "Cave Garlic": 1,
    },
  },
  "Potion of Peace": {
    id: "p05",
    name: "Potion of Peace",
    craft_lvl: 2,
    ingredients: {
      Itacory: 1,
      "Ultramarine Dust": 1,
      "Cave Garlic": 2,
    },
  },
  "Bottle of Peace": {
    id: "p06",
    name: "Bottle of Peace",
    craft_lvl: 3,
    ingredients: {
      Itacory: 2,
      "Ultramarine Dust": 1,
      "Dragon Seed": 1,
      "Spring Bay Leaf": 1,
    },
  },

  // GREED
  "Vial of Greed": {
    id: "p07",
    name: "Vial of Greed",
    craft_lvl: 1,
    ingredients: {
      Ilaves: 1,
      "Yellow Seed": 1,
    },
  },
  "Potion of Greed": {
    id: "p08",
    name: "Potion of Greed",
    craft_lvl: 2,
    ingredients: {
      Kloliarway: 1,
      "Ethereal Bone": 1,
    },
  },
  "Bottle of Greed": {
    id: "p09",
    name: "Bottle of Greed",
    craft_lvl: 3,
    ingredients: {
      Kloliarway: 2,
      "Ethereal Bone": 1,
      "Love Creeper": 1,
      "Spring Bay Leaf": 1,
    },
  },

  // NATURE
  "Vial of Nature": {
    id: "p10",
    name: "Vial of Nature",
    craft_lvl: 1,
    ingredients: {
      "Cliff Rue": 1,
      Ephjiora: 1,
      Powder: 4,
    },
  },
  "Potion of Nature": {
    id: "p11",
    name: "Potion of Nature",
    craft_lvl: 2,
    ingredients: {
      "Plasma of Abyss": 1,
      "Bone Powder": 3,
      Ephjiora: 3,
      Powder: 7,
    },
  },
  "Bottle of Nature": {
    id: "p12",
    name: "Bottle of Nature",
    craft_lvl: 3,
    ingredients: {
      "Plasma of Abyss": 3,
      Kloliarway: 1,
      "Purified Powder": 1,
    },
  },

  // MANA
  "Vial of Mana": {
    id: "p13",
    name: "Vial of Mana",
    craft_lvl: 2,
    ingredients: {
      "Ethereal Bone": 1,
      "Cliff Rue": 1,
      Tecceagrass: 2,
      Powder: 3,
    },
  },
  "Potion of Mana": {
    id: "p14",
    name: "Potion of Mana",
    craft_lvl: 3,
    ingredients: {
      Itacory: 2,
      Astrulic: 1,
      "Cliff Rue": 3,
      Maccunut: 2,
      Powder: 3,
    },
  },
  "Bottle of Mana": {
    id: "p15",
    name: "Bottle of Mana",
    craft_lvl: 4,
    ingredients: {
      "Ethereal Bone": 2,
      kloliarway: 1,
      Ephijora: 2,
      Plexisop: 1,
      Tecceagrass: 4,
    },
  },

  // TWILIGHT
  "Vial of Twilight": {
    id: "p16",
    name: "Vial of Twilight",
    craft_lvl: 2,
    ingredients: {
      "Love Creeper": 1,
      "Stinky Sumac": 1,
      Tecceagrass: 2,
      "Silver Ore": 3,
    },
  },
  "Potion of Twilight": {
    id: "p17",
    name: "Potion of Twilight",
    craft_lvl: 3,
    ingredients: {
      "Silver Dust": 1,
      kloliarway: 1,
      Astrulic: 1,
      Ilaves: 3,
      "Yellow Seed": 2,
    },
  },
  "Bottle of Twilight": {
    id: "p18",
    name: "Bottle of Twilight",
    craft_lvl: 4,
    ingredients: {
      "Silver Dust": 3,
      kloliarway: 1,
      "Wolf Root": 1,
      "Stinky Sumac": 3,
      "Mammoth Dill": 1,
      Maccunut: 3,
    },
  },

  //  MORPH
  "Vial of Morph": {
    id: "p19",
    name: "Vial of Morph",
    craft_lvl: 2,
    ingredients: {
      "Assassin Vine": 1,
      Itacory: 1,
      "Flammia Nut": 1,
      "Storm Hyssop": 1,
      Powder: 5,
    },
  },
  "Potion of Morph": {
    id: "p20",
    name: "Potion of Morph",
    craft_lvl: 3,
    ingredients: {
      "Silver Dust": 2,
      Itacory: 1,
      "Plasma of Abyss": 1,
      "Queen's Pepper": 1,
      "Mammoth Dill": 1,
      Maccunut: 3,
    },
  },
  "Bottle of Morph": {
    id: "p21",
    name: "Bottle of Morph",
    craft_lvl: 4,
    ingredients: {
      "Silver Dust": 6,
      "Assassin Vine": 1,
      "Plasma of Abyss": 1,
      "Ultramarine Dust": 1,
      "Flammia Nut": 1,
      Plexisop: 1,
      Ephjiora: 3,
      "Mercy Sassafras": 2,
    },
  },

  //  Packs
  "Remedy Pack": {
    id: "p507",
    name: "Remedy Pack",
    craft_lvl: 1,
    ingredients: {
      "Cliff Rue": 1,
      Tecceagrass: 1,
    },
  },
  "Poison Pack": {
    id: "p508",
    name: "Poison Pack",
    craft_lvl: 1,
    ingredients: {
      Ephjiora: 1,
      Maccunut: 1,
    },
  },

  // Complex Ingridients
  "Bone Powder": {
    id: "21",
    name: "Bone Powder",
    craft_lvl: 1,
    ingredients: {
      Bone: 4,
    },
  },
  "Purified Powder": {
    id: "24",
    name: "Purified Powder",
    craft_lvl: 1,
    ingredients: {
      "Bone Powder": 2,
      "Magic Stone": 1,
      Powder: 2,
    },
  },
  "Plasma of Abyss": {
    id: "59",
    name: "Plasma of Abyss",
    craft_lvl: 1,
    ingredients: {
      "Cliff Rue": 1,
      "Sun Tarragon": 1,
      "Cave Garlic": 1,
    },
  },
  "Ultramarine Dust": {
    id: "60",
    name: "Ultramarine Dust",
    craft_lvl: 1,
    ingredients: {
      "Stinky Sumac": 1,
      "Storm Hyssop": 1,
      Teceagrass: 1,
    },
  },
  "Ethereal Bone": {
    id: "61",
    name: "Ethereal Bone",
    craft_lvl: 1,
    ingredients: {
      Ephijora: 1,
      Ilaves: 1,
      Maccunut: 1,
      "Yellow Seed": 1,
    },
  },
  Itacory: {
    id: "62",
    name: "Itacory",
    craft_lvl: 2,
    ingredients: {
      "Ash Rosemary": 1,
      "Swamp Lavender": 1,
    },
  },
  "Assassin Vine": {
    id: "63",
    name: "Assassin Vine",
    craft_lvl: 2,
    ingredients: {
      "Sanguine Parsley": 1,
      "White Blossom": 1,
    },
  },
  Kloliarway: {
    id: "64",
    name: "Kloliarway",
    craft_lvl: 2,
    ingredients: {
      "Queen's Pepper": 1,
      "Mercy Sassafras": 1,
    },
  },
  "Silver Dust": {
    id: "69",
    name: "Silver Dust",
    craft_lvl: 3,
    ingredients: {
      "Silver Ore": 5,
      Powder: 2,
      Tecceagrass: 1,
    },
  },
};

const crafts_bs = {
  //Level 1
  "Torch": {
    id: "tch",
    name: "Torch",
    craft_lvl: 1,
    ingredients: {
      "Stick": 5,
      "Coke": 1
    },
  },
  "Wooden Shaft": {
    id: "14",
    name: "Wooden Shaft",
    craft_lvl: 1,
    ingredients: {
      "Stick": 5,
      "Powder": 1
    },
  },
  "Steel": {
    id: "19",
    name: "Steel",
    craft_lvl: 1,
    ingredients: {
      "Powder": 2,
      "Iron Ore": 2
    },
  },
  "Leather": {
    id: "20",
    name: "Leather",
    craft_lvl: 1,
    ingredients: {
      "Pelt": 4
    },
  },
  "Bone Powder": {
    id: "21",
    name: "Bone Powder",
    craft_lvl: 1,
    ingredients: {
      "Bone": 4
    },
  },
  "String": {
    id: "22",
    name: "String",
    craft_lvl: 1,
    ingredients: {
      "Stick": 3
    },
  },
  "Coke": {
    id: "23",
    name: "Coke",
    craft_lvl: 1,
    ingredients: {
      "Coal": 3,
      "Charcoal": 3
    },
  },
  "Purified Powder": {
    id: "24",
    name: "Purified Powder",
    craft_lvl: 1,
    ingredients: {
      "Powder": 2,
      "Magic Stone": 1,
      "Bone Powder": 2
    },
  },
  "Rope": {
    id: "31",
    name: "Rope",
    craft_lvl: 1,
    ingredients: {
      "Thread": 4,
      "String": 1
    },
  },
  "Metal Plate": {
    id: "33",
    name: "Metal Plate",
    craft_lvl: 1,
    ingredients: {
      "Stick": 3,
      "Powder": 3,
      "Iron Ore": 3
    },
  },
  "Wrapping": {
    id: "501",
    name: "Wrapping",
    craft_lvl: 1,
    ingredients: {
      "Cloth": 3,
      "String": 3
    },
  },
  "Wooden Arrows": {
    id: "505",
    name: "Wooden Arrows",
    craft_lvl: 1,
    ingredients: {
      "Stick": 6,
      "Iron Ore": 1
    },
  },

  //Level 2
  "Cord": {
    id: "12",
    name: "Cord",
    craft_lvl: 2,
    ingredients: {
      "Thread": 7,
      "Steel": 1
    },
  },
  "Silver Alloy": {
    id: "25",
    name: "Silver Alloy",
    craft_lvl: 2,
    ingredients: {
      "Silver Ore": 1,
      "Steel": 1,
      "Purified Powder": 1
    },
  },
  "Steel Mold": {
    id: "27",
    name: "Steel Mold",
    craft_lvl: 2,
    ingredients: {
      "Powder": 2,
      "Iron Ore": 2,
      "String": 2
    },
  },
  "Silver Mold": {
    id: "28",
    name: "Silver Mold",
    craft_lvl: 2,
    ingredients: {
      "Silver Ore": 2,
      "String": 2,
      "Coke": 2
    },
  },
  "Leash": {
    id: "502",
    name: "Leash",
    craft_lvl: 2,
    ingredients: {
      "Powder": 20,
      "Silver Ore": 20,
      "String": 10
    },
  },
  "Steel Arrows": {
    id: "511",
    name: "Steel Arrows",
    craft_lvl: 2,
    ingredients: {
      "Stick": 4,
      "Steel": 1
    },
  },

  //level 3
  "Silver Frame": {
    id: "32",
    name: "Silver Frame",
    craft_lvl: 3,
    ingredients: {
      "Powder": 5,
      "Silver Ore": 5,
      "Silver Alloy": 3
    },
  },
  "Metallic Fiber": {
    id: "34",
    name: "Metallic Fiber",
    craft_lvl: 3,
    ingredients: {
      "Silver Ore": 15,
      "Cord": 2
    },
  },
  "Crafted Leather": {
    id: "35",
    name: "Crafted Leather",
    craft_lvl: 3,
    ingredients: {
      "Coal": 4,
      "Cord": 1,
      "Leather": 4
    },
  },
  "Silver Arrows": {
    id: "512",
    name: "Silver Arrows",
    craft_lvl: 3,
    ingredients: {
      "Stick": 7,
      "Powder": 5,
      "Silver Ore": 5
    },
  },

  //level 4
  "Blacksmith Frame": {
    id: "29",
    name: "Blacksmith Frame",
    craft_lvl: 4,
    ingredients: {
      "Bauxite": 5,
      "Purified Powder": 3,
      "Silver Mold": 1
    },
  },
  "Artisan Frame": {
    id: "30",
    name: "Artisan Frame",
    craft_lvl: 4,
    ingredients: {
      "Bauxite": 5,
      "Purified Powder": 3,
      "Steel Mold": 1
    },
  },
  "Broad Arrows": {
    id: "515",
    name: "Broad Arrows",
    craft_lvl: 5,
    ingredients: {
      "Stick": 7,
      "Iron Ore": 3,
      "Coke": 1,
      "Quality Cloth": 1,
      "Bone Powder": 2
    },
  },
  "Heavy Arrows": {
    id: "517",
    name: "Heavy Arrows",
    craft_lvl: 5,
    ingredients: {
      "Stick": 7,
      "Iron Ore": 7,
      "Coke": 2,
      "Quality Cloth": 1
    },
  },
  "Compound Arrows": {
    id: "519",
    name: "Compound Arrows",
    craft_lvl: 4,
    ingredients: {
      "Stick": 7,
      "Iron Ore": 2,
      "Coke": 1,
      "Quality Cloth": 1,
      "Bone Powder": 1,
      "Silver Ore": 2
    },
  },
  
  //Level 5
  "Quality Cloth": {
    id: "36",
    name: "Quality Cloth",
    craft_lvl: 5,
    ingredients: {
      "Powder": 3,
      "Cloth": 11
    },
  },
  "Blacksmith Mold": {
    id: "37",
    name: "Blacksmith Mold",
    craft_lvl: 5,
    ingredients: {
      "Sapphire": 2,
      "Coke": 11,
      "Silver Alloy": 5,
      "Blacksmith Frame": 2
    },
  },
  "Artisan Mold": {
    id: "38",
    name: "Artisan Mold",
    craft_lvl: 5,
    ingredients: {
      "Magic Stone": 2,
      "Coke": 11,
      "Silver Alloy": 5,
      "Artisan Frame": 2
    },
  },
};

function performSearch() {
  const input = document.getElementById("searchInput").value.trim();
  
  const resultArea = document.getElementById("resultArea");

  resultArea.innerHTML = "";

  if (input === "") {
    resultArea.innerHTML = `<p>Please enter a search term.</p>`;
    resultArea.style.display = "block";
    return;
  }

  let resultsFound = false;

  for (const [key, value] of Object.entries(crafts)) {
    if (value.ingredients[input]) {
      resultsFound = true;
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
                <h2> ${value.name}</h2>

                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.entries(value.ingredients)
                      .map(
                        ([ingredient, amount]) =>
                          `<li>${ingredient}: ${amount}</li>`
                      )
                      .join("")}
                </ul>
            `;

      resultArea.appendChild(card);
    }
  }

  for (const [key, value] of Object.entries(crafts_bs)) {
    if (value.ingredients[input]) {
      resultsFound = true;
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
                <h2> ${value.name}</h2>

                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.entries(value.ingredients)
                      .map(
                        ([ingredient, amount]) =>
                          `<li>${ingredient}: ${amount}</li>`
                      )
                      .join("")}
                </ul>
            `;

      resultArea.appendChild(card);
    }
  }

  if (!resultsFound) {
    resultArea.innerHTML = `<p>No results found for "${input}".</p>`;
  }

  resultArea.style.display = "block";
}
