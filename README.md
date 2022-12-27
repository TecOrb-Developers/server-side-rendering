# Getting Started

## Available Scripts

In the project directory, you can run:
### `npx create-next-app@latest`

For the typescript, you can run:
### `npm i typescript`
### `npm i @types/react @types/node`

Run your project
### `npm run dev`

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Install Bootestrap for the CSS
### `npm i react-bootstrap bootstrap` 

### import bootstrap in the _app.js:
 import 'bootstrap/dist/css/bootstrap.min.css';

### export a function called getServerSideProps (Server-Side Rendering) from a page.
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}