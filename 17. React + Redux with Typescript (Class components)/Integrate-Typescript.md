## To generate react typescript app

npx create-react-app my-app --template typescript

## Important - Due to a bug in the DefinitelyTyped ReactDOM definitions, you need to add the ! operator here:

const root = ReactDOM.createRoot(el!);