const rp = require('request-promise');
const moment = require('moment');

async function htmlToPdfConvert(htmlContent, PDF_SCOPE_URL, userid, access_token, PDFFolderName) {
  return new Promise(async function (resolve, reject) {
      var convertedFile = '';
      try {
          var htmlBuffer = Buffer.from(htmlContent);
          var options = {
              url: `${PDF_SCOPE_URL}/users/${userid}/drive/items/root:/${PDFFolderName}/PDF${moment(new Date()).format('x')}.html:/content`,
              method: 'PUT',
              body: htmlBuffer,
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + access_token
              }
          };
          console.log(options.url);
          rp(options, async function (err, res, body) {
              if (err) {
                  console.log('err in creating html file ', err);
              }
              const itemData = JSON.parse(body);
              console.log(itemData);
              convertedFile = await convertFileToPDF(PDF_SCOPE_URL, itemData.id, access_token, userid)
              resolve(convertedFile);
          });
      } catch (e) {
          console.log(e);
      }
  }).then(function (data) {
      return data;
  })
}
async function convertFileToPDF(PDF_SCOPE_URL, itemid, accessToken, userid) {
  return new Promise(async function (resolve, reject) {
      var convertedFile = '';
      try {
          var options = {
              url: `${PDF_SCOPE_URL}/users/${userid}/drive/items/${itemid}/content?format=pdf`,
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer ' + accessToken
              }
          };
          await rp(options, function (errp, resp, body) {
              if (!errp) {
                  convertedFile = (resp);
                  console.log('Item Converted!! ==>', (convertedFile.request.uri.href));
                  resolve(convertedFile.request.uri.href);

              }
          })
      } catch (e) {
          console.log('err in converting file', e);
      }
  }).then(function (data) {
      return data;
  })
}

//code for html to pdf conversion ends

module.exports = {
  htmlToPdfConvert,
}
