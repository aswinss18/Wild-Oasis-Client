import React from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
export const metadata = { title: "The Wild Oasis " };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        <main>{children}</main>

        <footer>Copyright by the Wild Oasis</footer>
      </body>
    </html>
  );
}
