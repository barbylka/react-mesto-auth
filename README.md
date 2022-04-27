# The project 'Меsto' (eng. 'The place')

This is the updated React version of project [Mesto](https://github.com/barbylka/mesto-react). New features and layout elements have been added. The picture gallery now looks like more familiar blog sites, where users can interact with each other.

## Functions

On this site the user can:

- sign-up with fictional data as far as here there is no email authentication;
- sign-in with registered data, everything is saved with study server;
- forms validation created with custom hook `useValidation` ;
- reloading the page doesn't ask sign-in again, you can close and open it again and again;
- sign-out so that no one can see what pics you did liked and what your name is in the fictional world;
- like the places' cards;
- change the text in the profile lines "name" and "about yourself" or the photo;
- add and delete cards to the project;
- interact with the form without a mouse - a keyboard is enough;
- open any existing or added card for viewing on the full screen.

## Technology Stack

1. React hooks, functional components. Implementation of popups, cards rendering and the Context of the one user are done via `React.useState` `React.useRef` `React.useEffect` and one HOC (higher-order component) via `React.memo`

2. Interactions with local storage to save users' states and avoid reloggin in.

3. The Fetch API provides each user's action:

   - sign-in and sign out,
   - update profile data,
   - add cards and delete the only users' ones,
   - like / dislike photos. Thanks to the study platform server.

4. The project is responsive for different screen resolutions due to grids and flexboxes. Also the technology used:

```
@media screen and (max-width: XXXpx) {
  /* some props */
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is created for a fornt-end training course, thus, any comments on refinement and optimization are welcome!
