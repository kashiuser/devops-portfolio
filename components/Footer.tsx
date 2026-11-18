
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row">
        <p>
          © {new Date().getFullYear()} Kashi Diggi. All rights reserved.
        </p>

        <p className="font-mono">
          Built with Next.js + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
