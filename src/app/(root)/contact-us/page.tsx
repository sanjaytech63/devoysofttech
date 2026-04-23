import { ContactHeroSection } from "./components/ContactHero";
import { FAQSection } from "@/components/shared/FAQSection";
import { CONTACT_FAQS } from "@/lib/constants";
import BriefContainer from "./components/BriefContainer";
import { ContactSidebar } from "./components/ContactSidebar";
import { Container } from "@/components/ui/Container";

const page = () => {
  return (
    <main className="min-h-screen text-slate-900 dark:text-slate-100">
      <ContactHeroSection />
      <Container className="py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-2">
            <BriefContainer />
          </div>
        </div>
        <FAQSection
          faqs={CONTACT_FAQS}
          title="Before You Reach"
          highlight="Reach Out"
        />
      </Container>
    </main>
  );
};

export default page;
