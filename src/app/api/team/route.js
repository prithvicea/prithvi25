
import { NextResponse } from "next/server";
import { google } from "googleapis";


export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials:{
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key:process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes:[
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

  
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "A1:F1", 
      });
  
      const rows = response.data.values;
  
      if (!rows || rows.length === 0) {
        return NextResponse.json({
          status: 200,
          data: [],
          message: "No data found in the sheet.",
        });
      }
  
      // Assuming the first row contains headers
      const headers = rows[0];
      const data = rows.slice(1).map((row) => {
        return headers.reduce((obj, header, index) => {
          obj[header] = row[index] || ""; // Assign empty string if value missing
          return obj;
        }, {});
      });
  
      return NextResponse.json({
        status: 200,
        data,
      });
    } catch (error) {
      return NextResponse.json({
        status: 500,
        message: "Failed to fetch data",
        error: error.message,
      });
    }
  }