// Image import removed; not used in this component

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Resume / CV
      </h2>
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Ahmad Zaki
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Mahasiswa Teknik Komputer | Aspiring Software Engineer
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Kontak
                </h4>
                <p className="text-gray-600 dark:text-gray-400">📧 ahmadzakirizqullah05@gmail.com</p>
                <p className="text-gray-600 dark:text-gray-400">📱 +62 812-2084-2580</p>
                <p className="text-gray-600 dark:text-gray-400">📍 Jakarta, Indonesia</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Pendidikan
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Universitas Pendidikan Indonesia</p>
                <p className="text-gray-600 dark:text-gray-400">S1 Teknik Komputer (2023-2027)</p>
                <p className="text-gray-600 dark:text-gray-400">IPK: 3.74/4.00</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Keahlian Teknis
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  React, Next.js, TypeScript, Node.js, PHP, MySQL, MongoDB, Tailwind CSS, Git, Docker
                </p>
              </div>
            </div>
            
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all hover:-translate-y-1 shadow-lg text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Unduh CV Saya (.pdf)
            </a>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">AZ</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Ahmad Zaki
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Mahasiswa Teknik Komputer
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-500 space-y-1">
                    <p>📚 UPI - S1 Teknik Komputer</p>
                    <p>💻 Full-Stack Web Developer</p>
                    <p>🔧 AI & Machine Learning Enthusiast</p>
                    <p>🎯 IPK: 3.74/4.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 