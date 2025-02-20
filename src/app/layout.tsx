/** library imports */
import { Inter } from "next/font/google";

/** custom imports */
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paras Kori - Creative Engineer & Designer",
  description: "My portfolio as a full stack developer 👨🏻‍💻",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-slate-400`}>
        {children}
      </body>
    </html>
  );
}
