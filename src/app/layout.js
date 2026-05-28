import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "portal",
  description:
    "The next-generation crypto platform with high-yield liquid staking and global bank withdrawals.",

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
        sizes: "64x64",
      },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Meta Pixel Code */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;

n.push=n;
n.loaded=!0;
n.version='2.0';
n.queue=[];

t=b.createElement(e);
t.async=!0;
t.src=v;

s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)

}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1325098349725031');

/* TEST EVENT CODE */
fbq('set', 'agent', 'tmgoogletagmanager', '1325098349725031');

fbq('track', 'PageView', {}, {
  eventID: 'TEST32885'
});` }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1325098349725031&ev=PageView&noscript=1"
            alt="Meta Pixel" />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}