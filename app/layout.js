/* export const metadata = {
  title: 'Wild Oasis',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
 */

import Logo from "./_components/logo";
import Navigation from "./_components/navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";


const josefin = Josefin_Sans(
  {
    subsets: ["latin"],
    display: "swap",
  }
);

console.log(josefin);
export const metadata = {
    title: {
        template: "%s / The Wild Oasis",
        default: "Welcome / The Wild Oasis",
    },
    description:
        "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountails and dark forests",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
           <body className={`{josefin.className}
            bg-black text-gray-100 min-h-screen
            `}>
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
