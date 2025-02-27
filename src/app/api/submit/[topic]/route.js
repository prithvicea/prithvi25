import { NextResponse } from "next/server";
import { google } from "googleapis";
import { writeFile } from "fs/promises";
import { join } from "path";
import { mkdir } from "fs/promises";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request, { params }) {
  try {
    const { topic } =params;

    if (!topic) {
      return NextResponse.json(
        { message: "Topic parameter is required", success: false },
        { status: 400 }
      );
    }

    let id;
    if (topic === "Lecture1") {
      id = process.env.GOOGLE_SHEET_ID;
    }
    
    if (topic === "AutoCAD Design Competition") {
      id = process.env.WORKSHOP_SHEET_ID;
    }
    else {
      id = process.env.GOOGLE_SHEET_ID2;
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const alternateNumber = formData.get("alternateNumber");
    const instituteId = formData.get("instituteId");
    const instituteName = formData.get("instituteName");
    const paymentProof = formData.get("paymentProof");

    if (!paymentProof) {
      return NextResponse.json(
        { message: "Payment proof upload is required", success: false },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const bytes = await paymentProof.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), "uploads");
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (error) {
      console.error("Error creating directory:", error);
    }

    const filePath = path.join(uploadDir, paymentProof.name);
    await writeFile(filePath, buffer);

    const imageUrl = await uploadImageToDrive(auth, filePath, paymentProof.name);

    fs.unlinkSync(filePath);

    const sheets = google.sheets({ auth, version: "v4" });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: id,
      range: "A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            number,
            alternateNumber,
            instituteId,
            instituteName,
            imageUrl,
          ],
        ],
      },
    });

    return NextResponse.json({
      status: 200,
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json(
      { status: 500, success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

async function uploadImageToDrive(auth, filePath, fileName) {
  const drive = google.drive({ version: "v3", auth });

  console.log("Drive Upload Path:", filePath);
  console.log("Drive File Name:", fileName);
  console.log("Drive Parent ID:", process.env.GOOGLE_DRIVE_ID);

  const fileMetadata = { name: fileName, parents: [process.env.GOOGLE_DRIVE_ID] };
  const media = {
    mimeType: "image/jpeg",
    body: fs.createReadStream(filePath),
  };

  try {
    const file = await drive.files.create({
      resource: fileMetadata,
      media,
      fields: "id",
    });

    await drive.permissions.create({
      fileId: file.data.id,
      requestBody: { role: "reader", type: "anyone" },
    });

    const fileUrl = `https://drive.google.com/uc?id=${file.data.id}`;
    return fileUrl;
  } catch (error) {
    console.error("Drive upload error:", error);
    throw error;
  }
}
