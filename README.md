# Trivia App

A simple app built with React, Displays list of questions to answer true or false. 

## Directory
```bash
src
 ┣ components # root component
 ┃ ┣ helpers # Helper functions
 ┃ ┃ ┣ Loading.jsx # Loading component
 ┃ ┃ ┗ NotFound.jsx # Not found component
 ┃ ┣ questionList.jsx # Question list component
 ┃ ┣ Quiz.jsx # Quiz component
 ┃ ┣ QuizCard.jsx # Quiz card component
 ┃ ┣ QuizIntro.jsx # Quiz introduction component
 ┃ ┗ Score.jsx # Score component, displays score
 ┣ constants # Constants, dont change
 ┃ ┗ api.constant.js # API constants
 ┣ redux # Redux related files
 ┃ ┣ quiz.redux.slice.js # Quiz redux slice
 ┃ ┗ redux.store.js # Redux store
 ┣ styles # Styles related files
 ┃ ┣ card.styles.css # Card styles
 ┃ ┣ intro.styles.css # Intro styles
 ┃ ┣ quiz.styles.css # Quiz styles
 ┃ ┗ score.styles.css # Score styles
 ┣ utils # Utility files
 ┃ ┗ useCorrectAnswer.js # Use correct answer hook
 ┣ __test__ # Test files
 ┃ ┣ quiz.test.js # Quiz test
 ┃ ┗ quizCard.test.js # Quiz card test
 ┣ App.css # App styles
 ┣ App.js # App component
 ┣ App.test.js # App test
 ┣ index.css # Index styles
 ┣ index.js # Index component, entry point of the app
 ┣ reportWebVitals.js # Report web vitals
 ┗ setupTests.js # Setup tests
 ```
 ## Technology used
list of technologies used


* React (hooks)
* React router dom
* Redux Toolkit
* React React-Bootstrap 5
* Redux-persist
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `yarn test`

Will launch the test runner in the interactive watch mode.
### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
## Developer
[Twitter](https://twitter.com/emyokoli),
[LinkedIn](https://linkedin.com/in/emekaokoli),
[Github](https://github.com/emekaokoli)