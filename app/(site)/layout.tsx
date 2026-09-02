import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteBehaviour from '@/components/SiteBehaviour';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <SiteBehaviour />
    </>
  );
}
