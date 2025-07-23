const mongoose = require("mongoose")
const Recipe = require('./models/Recipe');
const dotenv = require("dotenv").config() 

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected to database")
    }

    catch (error) {
        console.log("erorr:Issue connecting to Database")
    }

}
connectToDB()


async function createRecipe() {
    const newRecipe = {
  name: 'Khabeesa',
  ingredients: [
    'water',
    'vegetable oil',
    'flour',
    'sugar',
    'rose water',
    'cardamom',
    'saffron',
    'walnuts',
    'dried rose petals'
  ],
  instructions: `Add the oil to a pot and roast the flour in the fat. In another pot, add the water, sugar, rose water, cardamom, and saffron. Bring it to a boil. Once the flour is browned, pour the boiling mixture over the flour and mix carefully — be cautious during this step. The Khabeesa is ready. Garnish with cardamom, walnuts, and dried rose petals.`,
  prepTime: 25,
  difficulty: 'Medium'
    }

    try {
        const created = await Recipe.create(newRecipe);
        console.log('Recipe created:', created);
    } catch (error) {
        console.error('Error creating recipe:', error);
    }
}

// createRecipe()

async function createNewRecipe() {
    const khanfaroosh = {
        name: 'Khanfaroosh',
        ingredients: [
            'eggs',
            'rose water',
            'flour with yeast',
            'cardamom',
            'vegetable oil'
        ],
        instructions: `Heat the oil. Mix all the ingredients together. Pour the batter into the hot oil using a spoon and flip it. Once done, it's ready — enjoy!`,
        prepTime: 20,
        difficulty: 'Easy'
    };

    try {
        const created = await Recipe.create(khanfaroosh);
        console.log('Khanfaroosh recipe created:', created);
    } catch (err) {
        console.error('Error creating Khanfaroosh recipe:', err);
    }
}

// createNewRecipe()

async function updateKhanfaroosh() {
       const updateRecipe = await Recipe.findByIdAndUpdate("6880afd254c874a70b810c34",{
  ingredients:  [
            'eggs',
            'rose water',
            'suger',
            'self-rising flour',
            'cardamom',
            'vegetable oil'
        ]
},{new:true})

console.log(updateRecipe)
}

// updateKhanfaroosh()

async function getAllRecipe(){
    const recipes = await Recipe.find()

recipes.forEach(Recipe => {
    console.log(`${Recipe.name} is an ${Recipe.difficulty} recipe and takes ${Recipe.prepTime} minutes to prepare`);
})
}
// getAllRecipe()


async function deleteRecipe(recipeId) {
  try {
    await Recipe.findByIdAndDelete("688154fe793eb2f9be06dc4e");
    console.log("Recipe successfully deleted.");
  } catch {
    console.log("Delete failed.");
  }
}
// deleteRecipe()

async function getRecipeById() {
   try { const recipe = await Recipe.findById("68808a23f4d83b6cb76cb02f");
   console.log(recipe);
}
   catch {
    console.log("No recipe with this ID exists.");
}
}

getRecipeById()


