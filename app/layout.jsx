import { Roboto } from "next/font/google";
import "./styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "R N A Consultoria em Seguros",
  description: "R N A Consultoria em Seguros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
