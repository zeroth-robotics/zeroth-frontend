export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 text-2xl">
          <h2 className="font-planar font-bold">GT Planar Bold</h2>
          <h2 className="font-planar font-black">GT Planar Black</h2>
          <h2 className="font-apparat font-bold">KMR Apparat Bold</h2>
          <h2 className="font-apparat font-medium">KMR Apparat Medium</h2>
          <h2 className="font-mono font-normal">CoFo Sans Regular</h2>
          <h2 className="font-mono font-medium">CoFo Sans Medium</h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
