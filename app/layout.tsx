import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { QueryProvider } from "../components/providers/query-client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { montserrat, raleway } from "@/lib/fonts";
import { defaultMetadata, siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL("https://capcons.com"),
  title: "Capcons | Empowering Creators and Communities",
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Capcons - Empowering Creators and Communities",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
    }],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Capcons - Empowering Creators and Communities",
    description: siteConfig.description,
    images: ["/twitter-image.webp"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={cn(montserrat.variable, raleway.className, "antialiased font-medium")}
      >
        <TooltipProvider>
          <NuqsAdapter>
            <QueryProvider>
              {children}
            </QueryProvider>
          </NuqsAdapter>
        </TooltipProvider>
      </body>
    </html>
  );
}
