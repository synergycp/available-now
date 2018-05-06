## Install

Edit the `$config` variable in `server/servers.php` to include the host name of the SynergyCP API (e.g. api.yoursynergycp.com) and an API Key of a SynergyCP Integration that has read access to Servers in Inventory.

Run the following on the command line from the root directory of this folder:
```bash
npm i
gulp
```

This will open a development version of the site in your browser.

## Compiling for web usage
```bash
gulp build
```

Then copy the contents of the `_build` folder to a directory of your website that you want the list to be available at (e.g. `available-servers`). 

## Changing the Theme

- `images/favicon.ico` - The favicon for the webpage
- `index.html` - Main page text/HTML structure (e.g. Page Title)
- `views/home.html` - Configuration of HTML for individual server rows (AngularJS)
- `styles/style.scss` - All the page CSS styling
