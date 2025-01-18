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
        "Itacory": 1,
        "Ultramarine Dust": 1,
        "Cave Garlic": 2,
      },
    },
    "Bottle of Peace": {
      id: "p06",
      name: "Bottle of Peace",
      craft_lvl: 3,
      ingredients: {
        "Itacory": 2,
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
        "Ilaves": 1,
        "Yellow Seed": 1,
      },
    },
    "Potion of Greed": {
      id: "p08",
      name: "Potion of Greed",
      craft_lvl: 2,
      ingredients: {
        "Kloliarway": 1,
        "Ethereal Bone": 1,
      },
    },
    "Bottle of Greed": {
      id: "p09",
      name: "Bottle of Greed",
      craft_lvl: 3,
      ingredients: {
        "Kloliarway": 2,
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
        "Ephjiora": 1,
        "Powder": 4,
      },
    },
    "Potion of Nature": {
      id: "p11",
      name: "Potion of Nature",
      craft_lvl: 2,
      ingredients: {
        "Plasma of Abyss": 1,
        "Bone Powder": 3,
        "Ephjiora": 3,
        "Powder": 7,
      },
    },
    "Bottle of Nature": {
      id: "p12",
      name: "Bottle of Nature",
      craft_lvl: 3,
      ingredients: {
        "Plasma of Abyss": 3,
        "Kloliarway": 1,
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
        "Tecceagrass": 2,
        "Powder": 3,
      },
    },
    "Potion of Mana": {
      id: "p14",
      name: "Potion of Mana",
      craft_lvl: 3,
      ingredients: {
        "Itacory": 2,
        "Astrulic": 1,
        "Cliff Rue": 3,
        "Maccunut": 2,
        "Powder": 3,
      },
    },
    "Bottle of Mana": {
      id: "p15",
      name: "Bottle of Mana",
      craft_lvl: 4,
      ingredients: {
        "Ethereal Bone": 2,
        "kloliarway": 1,
        "Ephijora": 2,
        "Plexisop": 1,
        "Tecceagrass": 4,
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
        "Tecceagrass": 2,
        "Silver Ore": 3,
      },
    },
    "Potion of Twilight": {
      id: "p17",
      name: "Potion of Twilight",
      craft_lvl: 3,
      ingredients: {
        "Silver Dust": 1,
        "kloliarway": 1,
        "Astrulic": 1,
        "Ilaves": 3,
        "Yellow Seed": 2,
      },
    },
    "Bottle of Twilight": {
      id: "p18",
      name: "Bottle of Twilight",
      craft_lvl: 4,
      ingredients: {
        "Silver Dust": 3,
        "kloliarway": 1,
        "Wolf Root": 1,
        "Stinky Sumac": 3,
        "Mammoth Dill": 1,
        "Maccunut": 3,
      },
    },
  
    //  MORPH
    "Vial of Morph": {
      id: "p19",
      name: "Vial of Morph",
      craft_lvl: 2,
      ingredients: {
        "Assassin Vine": 1,
        "Itacory": 1,
        "Flammia Nut": 1,
        "Storm Hyssop": 1,
        "Powder": 5,
      },
    },
    "Potion of Morph": {
      id: "p20",
      name: "Potion of Morph",
      craft_lvl: 3,
      ingredients: {
        "Silver Dust": 2,
        "Itacory": 1,
        "Plasma of Abyss": 1,
        "Queen's Pepper": 1,
        "Mammoth Dill": 1,
        "Maccunut": 3,
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
        "Plexisop": 1,
        "Ephjiora": 3,
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
        "Tecceagrass": 1,
      },
    },
    "Poison Pack": {
      id: "p508",
      name: "Poison Pack",
      craft_lvl: 1,
      ingredients: {
        "Ephjiora": 1,
        "Maccunut": 1,
      },
    },
  
    // Complex Ingridients
    "Bone Powder": {
      id: "21",
      name: "Bone Powder",
      craft_lvl: 1,
      ingredients: {
        "Bone": 4,
      },
    },
    "Purified Powder": { 
      id: "24",
      name: "Purified Powder",
      craft_lvl: 1,
      ingredients: {
        "Bone Powder": 2,
        "Magic Stone": 1,
        "Powder": 2,
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
        "Teceagrass": 1,
      },
    },
    "Ethereal Bone": {
      id: "61",
      name: "Ethereal Bone",
      craft_lvl: 1,
      ingredients: {
        "Ephijora": 1,
        "Ilaves": 1,
        "Maccunut": 1,
        "Yellow Seed": 1,
      },
    },
    "Itacory": {
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
    "Kloliarway": {
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
        "Powder": 2,
        "Tecceagrass": 1,
      },
    },
  };


  function performSearch() {
    const input = document.getElementById('searchInput').value.trim();
    console.log(input);
    const resultArea = document.getElementById('resultArea');
    

    resultArea.innerHTML = ""; // Clear previous results

    if (input === "") {
        resultArea.innerHTML = `<p>Please enter a search term.</p>`;
        console.log("Please enter a search term.");
        return;
    }

    let resultsFound = false;

    for (const [key, value] of Object.entries(crafts)) {
        if (value.ingredients[input]) {
            resultsFound = true;
            const card = document.createElement('div');
            card.className = 'card';
            

            card.innerHTML = `
                <h2> ${value.name}</h2>

                <p><strong>Ingredients:</strong></p>
                <ul>
                    ${Object.entries(value.ingredients)
                        .map(
                            ([ingredient, amount]) =>
                                `<li>${ingredient}: ${amount}</li>`
                        )
                        .join('')}
                </ul>
            `;

            resultArea.appendChild(card);
        }
    }

    if (!resultsFound) {
        resultArea.innerHTML = `<p>No results found for "${input}".</p>`;
    }

    resultArea.style.display = 'block';
}