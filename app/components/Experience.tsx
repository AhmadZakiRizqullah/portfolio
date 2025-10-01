const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Pengalaman
      </h2>
      <div className="space-y-8">
        {/* Internship */}
        {/*<div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Software Developer Intern
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                PT. Tech Solutions Indonesia
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              Juni 2024 - Agustus 2024
            </span>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Mengembangkan fitur dashboard admin menggunakan React dan TypeScript, meningkatkan efisiensi pengelolaan data sebesar 30%</li>
            <li>• Mengintegrasikan API RESTful dengan backend Node.js dan database PostgreSQL</li>
            <li>• Berkolaborasi dengan tim 5 orang dalam pengembangan aplikasi e-commerce</li>
            <li>• Menerapkan unit testing dengan Jest dan React Testing Library</li>
          </ul>
        </div>*/}

        {/* Asisten Laboratorium */}
{/*        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
                Asisten Laboratorium Pemrograman Web
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Universitas Pendidikan Indonesia
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              Januari 2024 - Sekarang
            </span>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Membantu 50+ mahasiswa dalam praktikum HTML, CSS, JavaScript, dan React</li>
            <li>• Mengembangkan materi praktikum dan dokumentasi yang digunakan oleh 3 angkatan</li>
            <li>• Menjadi mentor dalam proyek akhir mata kuliah untuk 15 mahasiswa</li>
            <li>• Mengorganisir workshop "Introduction to Modern Web Development"</li>
          </ul>
        </div>*/}

        {/* Freelance Project */}
        {/*<div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Freelance Web Developer
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Proyek Independen
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              2023 - Sekarang
            </span>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Mengembangkan website portfolio untuk 3 klien menggunakan Next.js dan Tailwind CSS</li>
            <li>• Membuat sistem manajemen konten untuk UMKM dengan fitur admin panel</li>
            <li>• Mengoptimalkan performa website dengan Lighthouse score di atas 90</li>
            <li>• Memberikan konsultasi teknis dan maintenance website secara berkala</li>
          </ul>
        </div>*/}

        {/* Organisasi */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400">
                Kepala Komisi Kepengawasan
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Himpunan Mahasiswa Teknik Komputer UPI
              </p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
              2025 - Sekarang
            </span>
          </div>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>• Memimpin tim 9 orang dalam Kepengawasan Himpunan Mahasiswa Teknik Komputer</li>
            <li>• Menilai dan mengevaluasi kegiatan Himpunan Mahasiswa Teknik Komputer</li>
            <li>• Membuat laporan kegiatan Himpunan Mahasiswa Teknik Komputer</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience; 