import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const CTASection = () => (
  <section id="contact" className="p-10 text-white shadow-lg sm:p-16">
    <Container>
      <div className="mx-auto p-10 max-w-3xl text-center btn-gradient">
        <h2 className="text-3xl font-black md:text-5xl">Ready to build something extraordinary?</h2>
        <p className="mt-4 text-lg opacity-90">Tell us about your project, and we’ll get back within 24 hours with a strategy and estimate.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary">Start a Project</Button>
          <Button variant="outline">See Our Work</Button>
        </div>
      </div>
    </Container>
  </section>
);
