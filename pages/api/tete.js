/*export default async function teste(req, res){
    const api_secret = process.env.GOOGLE_API_SECRET ; 
    const res = await fetch('https://spreadsheets.google.com/feeds/list/'+api_secret+'/1/public/values?alt=json')
    const data = await res.json()
    res.status(200).json(data)
}*/

// BEFORE RUNNING:
// ---------------
// 1. If not already done, enable the Google Sheets API
//    and check the quota for your project at
//    https://console.developers.google.com/apis/api/sheets
// 2. Install the Node.js client library by running
//    `npm install googleapis --save`

const {google} = require('googleapis');
const sheets = google.sheets('v4');

async function main () {
  const authClient = await authorize();
  const request = {
    // The spreadsheet to request.
    spreadsheetId: process.env.GOOGLE_API_SECRET,  // TODO: Update placeholder value.

    // The ranges to retrieve from the spreadsheet.
    ranges: [],  // TODO: Update placeholder value.

    // True if grid data should be returned.
    // This parameter is ignored if a field mask was set in the request.
    includeGridData: false,  // TODO: Update placeholder value.

    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.get(request)).data;
    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  } catch (err) {
    console.error(err);
  }
}
main();

async function authorize() {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  let authClient = null;

  if (authClient == null) {
    throw Error('authentication failed');
  }

  return authClient;
}