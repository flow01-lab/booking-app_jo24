

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col xs:flex-row xs:overflow-hidden">
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 content-center justify-items-center">
          {children}
        </div>
      </div>
    );
  }