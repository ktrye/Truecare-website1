import './globals.css';

export const metadata = {
  title: 'True Care Home Support | Swansea & Port Talbot',
  description: 'Calm, dependable non-medical home support for older people across Swansea, Port Talbot and surrounding areas.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
