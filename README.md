# PokerTS

1) Install Git from https://git-scm.com/
1a)  git config --global user.email "sleeping.dragons@googlemail.com"
     git config --global user.name "David Lewis"
3) Install NodeJS from https://nodejs.org/en/
4) Initialise repo (GitHub) https://github.com/PsychicSmurf/PokerTS
3a) Protext main
5) Clone repo
6) Create app folder
7) Create package file: In app folder initialise nodejs: npm init --yes
8) Create server: In app folder: npm install express dotenv
9) In app folder create app.js (https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
10) npm install dotenv (https://blog.logrocket.com/customizing-node-js-env-files/)
11) Create .env file
12) Create launch.json in VS Code in the Run Debug option
13) Install typescript: npm i -D typescript @types/express @types/node
14) Create tsconfig.json: npx tsc --init
14a) Activate option to "outDir": "dist"
15) Change express server to ts (https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
16) Create environment.d.ts in root: https://stackoverflow.com/questions/45194598/using-process-env-in-typescript
17) Add build to package.json (https://blog.logrocket.com/how-to-set-up-node-typescript-express/)
18) "npm run build" will now compile to dist
19) Install ts-node (npm install ts-node --save-dev)
20) Update launch.json (https://stackoverflow.com/questions/31169259/how-to-debug-typescript-files-in-visual-studio-code)
21) Install: npm i -D @types/express
22) npm install --save-dev jest
23) npm install --save-dev ts-jest
24) npm install --save-dev @types/jest
25) npm install --save-dev babel-jest @babel/core @babel/preset-env
26) npm install --save-dev @babel/preset-typescript
27) ./node_modules/.bin/jest --init
28) npm install --save-dev supertest
29) npm test now activates a live test monitor


npm install @types/express --save-dev
