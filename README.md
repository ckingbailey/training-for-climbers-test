I took this test from _Training for Climbing_ by Eric J Hörst.

Tomorrow I'll deploy this thing where people can use it. Then I'll put the link here.

If you want to run it locally
1. Pull the repo
2. `$ npm install`
3. Serve the public/ folder somehow. I like to use [serve](https://www.npmjs.com/package/serve), which I have globally installed
    - `$ npm i -g serve`
    - `$ serve public # your app is now being served on localhost:5000`
4. If you're developing, you can watch for file changes in src and recompile EJS on change
    - `$ npm run dev`