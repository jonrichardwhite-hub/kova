import './globals.css';
import NavTabs from './_components/NavTabs.jsx';

export const metadata = {
  title: 'Kova · Autonomous pharmacy platform',
  description:
    'Autonomous pharmacy, with a pharmacist still in the loop. Clinical reasoning platform and autonomous dispensing kiosk for retail pharmacy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavTabs />
        <main className="app-view">{children}</main>
      </body>
    </html>
  );
}
