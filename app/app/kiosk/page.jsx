export const metadata = { title: 'Kova · Kiosk prototype' };

export default function KioskPage() {
  return (
    <iframe
      className="kiosk-host"
      src="/ds/kiosk-demo.html"
      title="Kova kiosk prototype"
    />
  );
}
