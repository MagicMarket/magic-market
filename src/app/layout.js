import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magic Market",
  description: "Created by Bola Bulu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
