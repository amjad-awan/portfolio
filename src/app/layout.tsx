import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/common/Layout/Layout";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/context/authContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-stack developer",
  description: "Portfolio of a full-stack developer",
  icons: {
    icon: "/Images/logo2.svg", // ✅ path to favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Layout>{children}</Layout>
        </AuthProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
