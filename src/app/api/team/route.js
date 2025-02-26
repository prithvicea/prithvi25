import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function GET() {
    try {
        console.log("API route started - attempting to fetch team data");
        
        if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.SHEET_TEAM_ID) {
            console.error("Missing required environment variables");
            return NextResponse.json({
                success: false,
                status: 500,
                message: "Server configuration error: Missing required environment variables",
            });
        }
        
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });
        
        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

 
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SHEET_TEAM_ID,
            range: "A1:G100",
        });

        const rows = response.data.values;

        if (!rows || rows.length === 0) {
            console.log("No data found in sheet");
            return NextResponse.json({
                success: false,
                status: 200,
                data: [],
                message: "No data found in the sheet.",
            });
        }

        console.log(`Found ${rows.length} rows of data (including header)`);
        
        const headers = rows[0];
        console.log("Headers:", headers);
        
        if (rows.length <= 1) {
            return NextResponse.json({
                success: false,
                status: 200,
                data: [],
                message: "Only header row found, no team member data.",
            });
        }
        
        const data = rows.slice(1).map((row) => {
            return headers.reduce((obj, header, index) => {
                obj[header] = row[index] || ""; 
                return obj;
            }, {});
        });

        console.log(`Processed ${data.length} team members`);
        
        return NextResponse.json({
            success: true,
            status: 200,
            data,
        });
    } catch (error) {
        console.error("Google Sheets API Error:", error);
        return NextResponse.json({
            success: false,
            status: 500,
            message: "Failed to fetch data",
            error: error.message,
            stack: error.stack,
        });
    }
}