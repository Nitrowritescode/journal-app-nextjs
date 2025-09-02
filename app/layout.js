import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Journo",
  description: "Journaling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
        >
         
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 text-center text-gray-900">
              <p>Made with 💗 in India</p>
            </div>
          </footer>
      
        </body>
      </html>
    </ClerkProvider>
  );
}