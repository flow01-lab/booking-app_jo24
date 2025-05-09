import UserBanner from '../ui/components/user-banner';
import NavTop from '../ui/components/nav-top';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col xs:flex-row xs:overflow-hidden">
        <header className="sticky top-0">
            <UserBanner />
            <NavTop />
        </header>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }