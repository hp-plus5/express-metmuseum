# Welcome! :)

This is a fun little project I'm messing around with Express and Node.js with, since I haven't done that in a year or two! Calling on the [Metropolitan Museum's API](https://metmuseum.github.io), no particular plan, just poking.

This app was auto-generated using the default settings on the commandline.

## Instructions to run

If you're me on my ubuntu, you'll run these.

```
pkgx npm i
DEBUG=express-metmuseum:* pkgx npm run watch
```

I use `npm run watch` instead of `npm start` because I added dependencies to the project to allow me to see *certain* changes immediately in the browser. (Weeell, it takes a second. But you know.) Note that changes on pages that are not rendered using `response.render()` but rather `response.send()` or `response.json()` or similar will not be automatically updated visually; you must manually refresh the page in your browser. You will also need to update for `public/` file changes, **like CSS revisions**. You shouldn't need to restart the app in your commandline, though.


If you're not me on my ubuntu but you're on some other linux pretty boy:

```
npm i
DEBUG=express-metmuseum:* npm start
```

If you're on Windows:

```
npm i
set DEBUG=myapp:* & npm start
```

If these don't work for some reason, see the docs directly [here](https://expressjs.com/en/starter/generator.html).