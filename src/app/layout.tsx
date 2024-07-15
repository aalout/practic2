import '@/styles/index.scss'
import type { Metadata } from "next";
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: "Auth",
    description: "Authorization test",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="eng">
            <body className="wrapper">
                <Header/>
                    <main>{children}</main>
            </body>
        </html>
    );
}