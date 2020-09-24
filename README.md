# box-azure-migrate

Node.js package for converting html to pdf with azure

v0.0.11

## Installation

```
npm install htmlToPdfWithAzure --save
```


## Getting started

### 1. Usage



| Environment Variable   | Required? | Value                            |
| ---------------------- | --------- | -----------------------------------      |
| `PROXY`            | **No**   | It requires if you have proxy set up  |  
| `PDF_SCOPE_URL`            | **Yes**   | Name of the graph url i.e https://graph.microsoft.com/v1.0/
| `PDFFolderName`            | **Yes**   | Name of the folder name where you would like to save file |             
| `access_token`            | **Yes**   | Your Azure App Access Token |          
| `userid`            | **Yes**   | UserID of user whose account used to save files |     
| `htmlContent`            | **Yes**   | Html content which you want to be converted in pdf |  

### 2.Prerequisites

    1. User need to have a sharepoint account as the files converted will be saved      on the sharepoint only
    2. User need to have azure app access through which user will get their user id     and access token


### 3. Usage

***Method Name : uploadFiletoSharePoint*** - Used to upload file on share point which then be converted to pdf

```javascript
var HtmlToPdfWithAzure = require('htmlToPdfWithAzure');

// All the enviornment variable mentioned will be set in .env file
const pdfFile = await graph.uploadFiletoSharePoint(htmlContent, PDF_SCOPE_URL, userid, access_token, PDFFolderName);


if (!!pdfFile) {
    console.log("Get PDF URL ==>", pdfFile);
}

```

### 4. Usage Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

### 5. Usage Contributing
[MIT](https://choosealicense.com/licenses/mit/)
