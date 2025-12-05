// import MainNavigation from "@/components/ui/MainNavigation/MainNavigation";
import { ReactNode } from "react";
import BottomNavigation from "./BottomNavigation";

interface PageWrapperProps {
  locale: string;
  readonly pageContent: ReactNode;
  isNavTextOverlaping?: boolean;
}

export default async function PageWrapper({
  locale,
  pageContent,
  isNavTextOverlaping = false,
}: PageWrapperProps) {
  console.log(locale);
  return (
    // <CookieConsentProvider>
    <div className="bg-white min-h-screen">
      {/* <MainNavigation
        locale={locale}
        trackHeaderOverlap={isNavTextOverlaping}
      />

      {/* <CookieBanner /> */}

      <div className="w-full">{pageContent}</div>
      <BottomNavigation />

      {/* <Footer /> */}
    </div>
    // </CookieConsentProvider>
  );
}
