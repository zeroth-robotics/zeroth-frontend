import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <header className="flex flex-col items-center justify-center py-20 px-[5%]">
        <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">We're glad to have you here.</p>
      </header>
      <main className="flex-grow p-8">
        <section className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-md mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
