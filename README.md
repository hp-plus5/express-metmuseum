# Welcome! :)

This is a fun little project I'm messing around with Express and Node.js with, since I haven't done that in a year or two! Calling on the [Metropolitan Museum's API](https://metmuseum.github.io), no particular plan, just poking.

This app was auto-generated using the default settings on the commandline.

## Most Interesting Parts

I wanted to display a list of different paintings. Thanks to the inner workings of the Met API, this meant I needed to make one asynchronous call to get the IDs of the works I wanted to see, then make *another async call for each of those IDs*, then return them and my template to the frontend within the asynchronous promises so as to ensure my array of results was hydrated before execution.

I did this adding my unreturned promises for each individual ID's API call to an array and calling on `Promise.all(myArrayOfPromises)` instead to let them all pass through one `then()` to unify my results to the front end. You can see my code in `/routes/users.js` for now, a file name I simply haven't renamed yet from the default app generation.

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