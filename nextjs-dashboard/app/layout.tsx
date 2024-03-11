import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Use Inter to use font across entire body element. 'antialiased' uses Tailwind to smooth out the font */}
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
