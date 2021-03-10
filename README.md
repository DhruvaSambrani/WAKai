# WAKai

Open everything

## Windows

1. Download the [latest](https://github.com/DhruvaSambrani/WAKai/releases/latest) .exe file.
2. Double click the downloaded file to install

## Linux

### AppImage

1. Download the [latest](https://github.com/DhruvaSambrani/WAKai/releases/latest) AppImage.
2. Double click to run.

### deb

1. Download the [latest](https://github.com/DhruvaSambrani/WAKai/releases/latest) .deb file
2. Run `sudo apt install ./path/to/installed/file.deb` for apt(Ubuntu). Or, compile the others.

## Others

1. Download and install Nodejs and npm
2. Clone source
3. `cd` to repo folder
4. run `npm install`
5. run `npm start`

## Packaging for other OSs

This repo uses [electron-build](https://www.electron.build) to package the electron app.

1. change package.json according to electron-builder docs [here](https://www.electron.build)
2. run `npm run dist`
3. Install/run the executable from `./dist`
