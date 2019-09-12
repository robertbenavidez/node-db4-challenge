const express = require('express');
const helmet = require('helmet');

const server = express();


const ingredientsRouter = ('./ingredients-router.js');
const recipeRouter = ('./recipes/recipe-router.js')


server.use(express.json());
server.use(helmet());
server.use('/api/recipes', RecipeRouter);
server.use('/api/ingredients', ingredientsRouter)


module.exports = server;