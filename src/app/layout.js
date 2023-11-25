import { AuthProvider } from "@/components/provider/AuthProvider";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faceboox - Shellx",
  description: "facebook clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" w-full  relative">
          <div>
            <AuthProvider>
              {children}
              <div className="absolute bottom-2 w-full">
                <div className=" ">
                  <h1 className="text-center ">
                    Made with love ❤ @shellx-aziz
                  </h1>
                </div>
              </div>
            </AuthProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
