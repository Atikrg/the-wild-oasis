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

import "@/app/_styles/globals.css";
import Header from "./_components/Header/header.component";

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
            <body
                className={`
            bg-black text-gray-100 min-h-screen flex flex-col
            `}
            >
                <Header />
                <div className="flex-1 px-8 py-12 ">
                <main className="mx-auto max-w-7xl">{children}</main>
                </div>
    
            </body>
        </html>
    );
}
