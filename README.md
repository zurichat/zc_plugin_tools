# Company Online Tools Plugin ✌

The company online tools plugin is a feature which allows users to interact with third party tools like Google Drive, Figma, Github, etc. to make work flow for themselves or their team faster and easier.
 
All our tools are external applications that you may have used or heard of but to maximize productivity, we are giving you access to some of their awesome features right in Zuri Chat.

## Design:
Figma link to the design implemented:
<br>
 coming soon... 👀

## Hosted URL:
https://externaltools.zuri.chat/

## Tech Stack:
 - React js
 - Nodejs
 - Tailwind


# Project Setup & Contribution Guide:
 - Fork this REPO
 - Clone the repo from your account to your local PC
 ``` 
 git clone https://github.com/<username>/zc_plugin_tools.git
 ```

#
## BACKEND

 - Switch to the **client** directory and install all dependencies
 ``` 
 cd server 
 yarn install  
 ```

## FRONTEND

 - Switch to the **server** directory and install all dependencies
 ``` 
 cd client 
 yarn install 
 ```
# How to Contribute

 - Add the main repo remote to your project upstream
 ```
 git remote add upstream https://github.com/zurichat/zc_plugin_tools.git
 ```

 - Pull from upstream
 ```
 git pull upstream dev
 ```

 - Switch to a new branch (dev)
 ```
 git checkout -b dev
 ```

 - Add your work/code

 - When done making your changes, run
```
  git add .
  git commit -m <your commit message>
  git push origin dev
```

## Hosting Live with vercel (first time only)
- Create a Vercel Account and give vercel access to your github
- Make a new project
- Select the repo (zc_plugin_tools) you just worked on
- Setup and deploy.
- After deploying...

## How to contribute continued...
- Click on **Fetch upstream** on your forked repo
- Create a Pull Request to `` dev `` branch, only if there are no merge conflicts
- Add your tech stack team lead as a reviewer of the Pull request.
- Get him / her to approve your PR
- Wait for the admin to review and merge your code

<br>

  # For Local Testing:
 - Run backend server
 ```
 cd server
 yarn run dev
 ```
 - Open http://localhost:3600/

 - Run Frontend server

 - Open another terminal (can be in vscode) and run
 ```
 cd client
 yarn start
 ```
 - Open http://localhost:3000/
 ```
