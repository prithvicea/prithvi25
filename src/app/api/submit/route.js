
import { NextResponse } from "next/server";
import { google } from "googleapis";

export  async function POST(request) {

    

    const body = await request.json();


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

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:process.env.GOOGLE_SHEET_ID,
            range:'A1:F1',
            valueInputOption:'USER_ENTERED',
            requestBody: {
                values:[
                    [body.name , body.email, body.number, body.alternateNumber, body.instituteId, body.instituteName]
                ]
            }
        });

        return  NextResponse.json({
            status: 200,
            data: response.data
          });
        
    } catch (error) {
        return NextResponse.json({
            status:500,
            message:"Something went wrong"
    })
        
    }
    
}