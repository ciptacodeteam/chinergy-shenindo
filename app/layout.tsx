import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import NavigationBar from '@/components/navigation';
import FooterSection from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CV. Chinergy Shenindo – Jasa Pabrikasi, Reparasi & Spare Parts Medan',
  description:
    'CV. Chinergy Shenindo adalah perusahaan yang berdiri sejak tahun 2021 di Medan, Sumatera Utara. Kami berfokus pada layanan pabrikasi, reparasi, serta pengadaan spare parts untuk mendukung kebutuhan industri. Dengan pengalaman dan komitmen yang terus berkembang, kami hadir sebagai mitra terpercaya bagi berbagai perusahaan di Indonesia.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <NavigationBar />
        <main className='min-h-[calc(100vh-theme(spacing.24)-theme(spacing.32))]'>
          {children}
        </main>
        <WhatsAppButton />
        <FooterSection />
      </body>
    </html>
  );
}
