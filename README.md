# React Cookbook Practice
This repository contains code and documentation from react cookbook by by David Griffiths (Author), Dawn Griffiths (Author)

[Link](https://www.amazon.co.uk/React-Cookbook-Recipes-Mastering-Framework/dp/1492085847)

# Recipes

## Routing

1. Let's say you have requirement of two tabs on a screen. Managing tab state internally using useState have following disadvantages. 
  -  If user refresh the screen, tab id will be gone.
  - Users can't bookmark

**Solution** - We are going to move the tabId state from the component into the current browser location.

2. We use routes in React applications so that we make more of the facilities of the browser. We can bookmark pages, create deep links into an app, and go backward and forward in history.
However, once we use routes, we make the component dependent upon something outside itself: the browser location. That might not seem like too big an issue, but it does have consequences.
Let’s say we want to unit test a route-aware component. The error occurred because a NavLink could not find a Router higher in the compo‐
nent tree. That means we need to wrap the component in a Router before we test it.

**Solution** - React router provides Memory router. The MemoryRouter appears to the outside world just like BrowserRouter. The difference is that while the BrowserRouter is an interface to the underlying browser history API, the MemoryRouter has no such dependency. 

3. Use Prompt for Page Exit Confirmations. What if there are several pages in the application that need the same feature? Is there a simple way to create this feature across any component that needs it?

**Solution** - The react-router-dom library includes a component called **Prompt**, which asks users to confirm that they want to leave a page.

4. Most applications need to prevent access to particular routes until a person logs in. But how do you secure some routes and not others? Is it possible to separate the secu‐ rity mechanisms from the user interface elements for logging in and logging out? And how do you do it without writing a vast amount of code?

**Solution** - React router, use context api