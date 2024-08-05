# React Cookbook Practice
This repository contains code and documentation from react cookbook by by David Griffiths (Author), Dawn Griffiths (Author)

[Link](https://www.amazon.co.uk/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847)

# Recipes

## Routing

1. Let's say you have requirement of two tabs on a screen. Managing tab state internally using useState have following disadvantages. 
  -  If user refresh the screen, tab id will be gone.
  - Users can't bookmark

**Solution** - We are going to move the tabId state from the component into the current browser location.

