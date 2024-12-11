import CTAButton from "@/components/buttons/ctaButton";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

const Header = () => {
  return (
    <section className="pt-16 bg-black text-white">
      <div className="flex flex-col items-center text-center pt-10">
        <h1 className="text-5xl mt-16">
          The world's first humanoid robot for those who prefer transparency over trust.
        </h1>
        <h2 className="text-3xl mt-8">
          Open-source to protect your privacy, ensure fair pricing, and ensure your contributions
          help move humanity up the Kardashev scale.
        </h2>
      </div>
    </section>
  );
};

const BuyNow = () => {
  return (
    <div className="flex flex-col items-center text-center pt-10">
      <CTAButton />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <NavBar />
      <main className="flex-grow p-8 max-w-7xl mx-auto">
        <Header />
        <BuyNow />
      </main>
      <Footer />
    </div>
  );
}
