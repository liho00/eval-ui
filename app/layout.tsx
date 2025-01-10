import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/config";
import { cn, constructMetadata } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Toaster } from "@/components/ui/sonner";
import Providers from "./providers";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: `${siteConfig.name} | ${siteConfig.description}`,
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth font-sans"
        )}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <Header />
            {children}
            <Footer />
            <Toaster position="top-center" richColors={true} />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
