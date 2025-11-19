"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-blue-300 p-4 text-center">
        <h1 className="text-xl md:text-2xl font-bold">My App</h1>
      </header>

      {children}

      <footer className="bg-pink-300 p-4 text-center text-sm md:text-base">
        <p>© 2025 My App. All rights reserved.</p>
      </footer>
    </>
  );
}
