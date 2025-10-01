import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[80vh]">
      <div className="flex-1 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-6 tracking-tight animate-gradient">
          Hello, I'm <br />
          <span className="block mt-2">Ahmad Zaki</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Mahasiswa Teknik Komputer | Aspiring Computer Engineer
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl animate-fade-in-delayed">
          Seorang mahasiswa teknik komputer dengan gairah pada pengembangan web dan Artificial Intelligence (AI) untuk memecahkan masalah dunia nyata.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-delayed-2">
          <Link
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1 shadow-lg"
          >
            Lihat Proyek Saya
          </Link>
          <a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:-translate-y-1 shadow-lg hover:border-purple-500 dark:hover:border-purple-500"
          >
            Hubungi Saya
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1 shadow-lg"
          >
            Unduh CV
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center animate-fade-in-delayed">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl animate-float">
          <Image
            src="/image/Profile.jpg"
            alt="Ahmad Zaki - Mahasiswa Teknik Komputer"
            fill
            style={{ objectFit: "cover" }}
            className="bg-gray-100 dark:bg-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 