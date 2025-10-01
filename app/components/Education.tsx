const Education = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Pendidikan
      </h2>
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Universitas Pendidikan Indonesia
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
              S1 Teknik Komputer
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              2023 – Diperkirakan Lulus 2027
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              IPK: 3.74/4.00
            </p>
            
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Mata Kuliah Relevan:
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>• Kecerdasan Buatan</li>
              <li>• Pemrograman Web</li>
              <li>• Jaringan Komputer</li>
              <li>• Pemrograman Berbasis Objek</li>
              <li>• Keamanan Jaringan Komputer</li>
              <li>• Rekayasa Perangkat Lunak</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Penghargaan Akademik:
            </h4>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-800 dark:text-blue-300">
                  Proyek Terbaik Kedua Mata Kuliah Rekayasa Perangkat Lunak
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Program Penilaian Proker Himpunan Mahasiswa Teknik Komputer
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  2025
                </p>
              </div>
              
              {/*<div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                <h5 className="font-semibold text-green-800 dark:text-green-300">
                  Penghargaan Dean's List
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mahasiswa berprestasi dengan IPK tertinggi di semester
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Semester 3 & 4
                </p>
              </div>*/}
              
              {/*<div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold text-purple-800 dark:text-purple-300">
                  Juara 2 Kompetisi Programming
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kompetisi programming tingkat fakultas
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  2023
                </p>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 