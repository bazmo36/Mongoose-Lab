const { default: mongoose } = require("mongoose")

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    ingredients: [String],
    instructions:{
        type: String ,
        require: false
    },
    prepTime:{
        type:  Number ,
        require: false
    },
   difficulty:{
     type: String ,
      enum: ['Easy', 'Medium', 'Hard'],
   }
})

const Recipe = mongoose.model('Recipe',recipeSchema)

module.exports = Recipe



