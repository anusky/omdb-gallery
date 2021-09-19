Welcome to anusky's OMDB Movie Gallery

## Tools and frameworks used in this project

### General

- React Js
- NextJS
- TailwindCSS for styling
- localStorage for storing user data
- swr for caching requests and avoid unnecessary re-renders

### Unit testing

- Jest
- React Testing Library from Kent.C Dodds
- node-mocks-http

### E2E testing

- Cypress
- Cypress Testing Library from Kent.C Dodds

## Github Actions

In order to ensure all tests are passing before accepting a PR a github action workflow has been set up.

## Getting Started

### Install dependencies

First, install all dependencies with:

```bash
yarn install
```

### Run your local server

To have an end user experience is better to work with the built version.
I have left in package a command that will build and run automatically the application.

```bash
yarn deploy:local
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Netlify

You can find this application deployed under Netlify.
Open [https://ombd-gallery.netlify.app/](https://ombd-gallery.netlify.app/) with your browser to see it.

## TODO List

### Create a simple movie browser where user can

[x] Search for movies
[x] Search can start with just 2 letters
[x] Search is autocomplete
[x] The result is using pagination
[x] Please follow the design layout as above using styling

### Create details page where user can

[x] Click on the selected movie from the list and see movie details
[x] Each movie will have details, poster, and add to fav. Button
[x] Fav. Button will add a move to your favourites list

### Create favourites list page where

[x] User can see list of previously added movies
[x] Remove given movie from favourites
[x] Undo his remove action
Please store your favourite movie list in a simple NodeJS server (you
create) or local storage.

## Things I would add

- Viewed list
- Breadcrumbs
- Navbar
