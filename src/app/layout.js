import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Prithvi 25",
  description: "Event celebrated by Civil department @NIT CALICUT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <body>
      <Navbar />
        {children}</body>
    </html>
  );
}
