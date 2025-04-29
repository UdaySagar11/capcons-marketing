import { Suspense } from "react";
import { Footer } from "../../components/common/footer";
import { Navbar } from "@/components/common/navbar";
import { CustomThemeProvider } from "@/components/providers/theme-provider";

const MarketingLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <CustomThemeProvider forcedTheme="light" attribute="class" defaultTheme="light">
            <div className="relative bg-[#39089D] min-h-screen">
                <Navbar />
                <main className="z-10 relative bg-white mx-auto">
                    <Suspense>{children}</Suspense>
                </main>
                <Footer />
            </div>
        </CustomThemeProvider>
    );
};

export default MarketingLayout;
