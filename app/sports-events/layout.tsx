import UserBanner from '../ui/user-banner';
import NavTop from '../ui/nav-top';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <header className="sticky top-0">
            <UserBanner />
            <NavTop />
        </header>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }