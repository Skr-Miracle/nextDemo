import "../../app/globals.css";
import Header from '@/app/components/header'
import {Comforter} from 'next/font/google'
const inter = Comforter({subsets:['latin'] , weight: '400'})


export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className={inter.className}>
        <Header></Header>
        {children}
    </div>
    </>
  );
}
