export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center">
          {children}
        </div>
    );
  }