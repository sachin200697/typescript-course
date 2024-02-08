## Percel 
In the upcoming lecture, we will be installing the parcel-bundler tool globally to our system. As a reminder from earlier in the course, this is no longer necessary as the new Parcel tool can be run without installation using npx.

To build the app and run the development server, simply run the following command in your terminal:

npx parcel index.html

can also use script inside package.json file: "start:parcel": "npx parcel index.html"

Also, make sure to add type="module" to the script tag of your index.html

<script type="module" src="./src/index.ts"></script>


## Creating json server

npm install json-server@0

create a .json file in root directory of the project, here inside web folder:
like - db.json 

inside db.json: 

{
    "users": []
}

to run the json server : json-server -w db.json

## No overload matches this call - this.data

In the upcoming lecture will be creating our Attribute.ts file. You will end up seeing an error here, with this.data underlined in red:

  set(update: T): void {
    Object.assign(this.data, update);
  }
No overload matches this call.

To solve it: In src/models/Attributes.ts, we need to change:

export class Attributes<T> {

to

export class Attributes<T extends object> {

