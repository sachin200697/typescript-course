## Percel 
In the upcoming lecture, we will be installing the parcel-bundler tool globally to our system. As a reminder from earlier in the course, this is no longer necessary as the new Parcel tool can be run without installation using npx.

To build the app and run the development server, simply run the following command in your terminal:

npx parcel index.html

Also, make sure to add type="module" to the script tag of your index.html

<script type="module" src="./src/index.ts"></script>