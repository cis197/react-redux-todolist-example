# React-redux example

There are two folders in this repo. `just-react` contains the version of the application using ONLY React. Make sure you fully understand how it works before looking at `react-redux`. The idea is that `just-react` needs to pass around state and state handlers so much that it's not worth it to have application state localized to small components. Anyway, once you *fully* understand `just-react`, go ahead and look at the code in `react-redux`. `react-redux` takes the state that was in the React components from `just-react` and puts it into Redux's store. It's cleaner! You'll see why

## Setting up
For *EACH* of `just-react` and `react-redux` folders, do the following
- go into the appropriate directory
- run `npm install`

By doing the above, `npm` will look at the respective `package.json` files and install dependencies.

To run either project, go into the appropriate directory, run `npm start`, and then go to `http://localhost:1234` in your browser.