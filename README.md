# inse-3b-revu [![Actions Status](https://github.com/mikaelsrozee/inse-3b-revu/workflows/Node.js%20CI/badge.svg)](https://github.com/mikaelsrozee/inse-3b-revu/actions)
University / degree review application for 2nd year coursework

Read the documentation: [GitHub pages](https://mikaelsrozee.github.io/inse-3b-revu/)


## Dependencies
* [PostgreSQL](https://www.postgresql.org/)
* [Python](https://www.python.org/) (to install bcrypt)
* [NodeJS](https://nodejs.org/)


## Install through npm
`npm install`

`npm run setup`

You must the edit the config file (/backend/config/config.json) to fill in postmarkAPIKey, domain and fromEmail

You can get a postmarkAPIKey from [postmark](https://postmarkapp.com), you must then set up a server and put the email address of that server into the fromEmail option

The domain should be localhost:3000 if running locally, or your domain name and port if running with a domain name

## Run
`npm start`

## Test
To test all backend js run `npm test`


## GitHub usernames -> UP numbers
- mikaelsrozee -> 889658
- dig -> 885013
- ashleycma -> 890481
- frontside3mmett -> 870699
- Nathan-Chapman -> 892655
- HarryJLFoster -> 855232



