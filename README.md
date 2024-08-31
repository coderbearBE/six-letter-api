# six-letter-api

**Pre requisites**
Have node installed - Go to https://nodejs.org/en and install the LTS version (currently v20.17.0)

Or use Node Version Manager:
If you do not have Node Version Manager installed, the following guide should explain you how to install NVM for you preferred OS:
https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/

I added a .nvmrc file to easily switch to the correct node version. Use following command: `nvm use`

Have a code editor installed - Go to https://code.visualstudio.com/ and install the correct version for you OS.

**Install project**
Clone the project from my Github repo `git clone git@github.com:coderbearBE/six-letter-api.git` when using a SSH connection.
If you do not have a SSH connection configured you can always clone via a HTTPS connection `git clone https://github.com/coderbearBE/six-letter-api.git`.
Or you can just download the ZIP and extract the ZIP file locally.

Next navigate into the project folder in your terminal. Use the command `code .` to open the current project in a new code editor window.
When you get an error, follow the steps described in the following link to install the 'code' command in PATH:
https://www.freecodecamp.org/news/how-to-open-visual-studio-code-from-your-terminal/

If the previous did not work:

- Open Visual Studio Code
- In the upper left corner select `File` > `New Window`
- Select `Open Folder...` and search for the project folder in your local directory.

In your own terminal or the integrated terminal from Visual Studio Code (`Terminal` > `New Terminal`) type the following command to install the necessary packages to run the project: `npm install`

**Run project**
`npm run start`

**Run tests**
`npm run test`
