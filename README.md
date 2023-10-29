### how to use gh-pages

npm run deploy

1. npm install gh-pages
2. npm run build
3. go to package.json
   - add: "homepage": "https://YOUR_USERNAME.github.io/REPOSITORY"
   - add: "deploy": "gh-pages -d build" in scripts
     if you add "predeploy": "npm run build"
     that is skip number2 "npm run build"
4. npm run deploy
