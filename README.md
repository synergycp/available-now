## Install

Run the following on the command line (make sure git, npm, and gulp are installed):
```bash
git clone git@github.com:synergycp/available-now.git
cd available-now
npm i
sudo npm i -g bower
```

Edit the `$config` variable in `server/servers.php` to include the host name of the SynergyCP API (e.g. api.cp.example.org) and an API Key of a SynergyCP Integration that has read access to Servers in Inventory.

Then run:
```bash
gulp build
```

Then copy the contents of the `_build` folder to a directory of your website that you want the list to be available at (e.g. `available-servers`). 

## Changing the Theme

- `images/favicon.ico` - The favicon for the webpage
- `index.html` - Main page text/HTML structure (e.g. Page Title)
- `views/home.html` - Configuration of HTML for individual server rows (AngularJS)
- `styles/style.scss` - All the page CSS styling

After changes have been made, run `gulp build` to compile the files again, then copy the contents of the `_build` folder to your web host.

