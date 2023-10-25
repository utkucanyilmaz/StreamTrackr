# StreamTrackr

StreamTrackr is a Chrome extension that helps you to see the channels you follow on Twitch platform that are currently live in one place.

## Screenshot

![Screenshot of extension](./public/images/screenshot.png)

## Features

- Display a list of followed channels that are currently live.
- Quickly search for desired channels using the search bar.
- Switch between dark and light modes for better viewing.
- Refresh the list of channels.

## Installation

Follow these steps to install the extension:

### Registering Twitch

- To register your app follow these steps -> [Register Your App](https://dev.twitch.tv/docs/authentication/register-app/)

### Getting User Access Token

> ❗ To use the extension, you'll need an **Access Token**.

- This extension uses the **implicit grant flow** to obtain a user access token. You can find detailed information by visiting the following link ->
  [Implicit Grant Flow](https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow)

### .env File Configuration

`VITE_CLIENT_ID=YOUR_TWITCH_CLIENT_ID`

`VITE_REDIRECT_URI=YOUR_REDIRECT_URI` (To perform local development, you can use the default Vite server with localhost:5173)

`VITE_BASE_URL=https://api.twitch.tv/helix`

`VITE_LINK=YOUR_LINK` (This link redirects specifically created website for obtaining a user access token)

> Instead of creating an external site, you can customize the HTML hyperlink in the **Link** component as described in the implicit grant flow page.

### Extension Setup

- Clone this project's GitHub repository or download the ZIP file.
- Run `npm install` to install dependencies.
- Use `npm run build` to build the extension files.
- Open the `chrome://extensions` page in your Chrome browser.
- Turn on the "Developer mode" switch in the top right corner of the page.
- Click the "Load unpacked" button in the top left corner of the page.
- Select the `dist` folder and click "OK".

Once the extension is successfully installed, you will see the extension icon in your browser's toolbar.

## Development

If you wish to further develop the application, you can follow these steps:

- Clone this project's GitHub repository or download the ZIP file.
- Run `npm install` to install dependencies.
- Use `npm run dev` to start the development server.
- Edit the code and save your changes. You can see the changes by refreshing your browser.

## Technologies and APIs Used

The StreamTrackr was built using the following technologies and APIs:

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Twitch API](https://dev.twitch.tv/docs/api/)
- [Axios](https://axios-http.com/docs/intro)
- [React Icons](https://www.npmjs.com/package/react-icons)
