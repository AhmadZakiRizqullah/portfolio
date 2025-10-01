const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Tentang Saya
      </h2>
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Cerita Latar Belakang
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Sejak kecil, saya selalu tertarik dengan teknologi dan bagaimana komputer dapat memecahkan masalah kompleks. 
              Ketertarikan ini membawa saya untuk memilih jurusan Teknik Komputer di Universitas Pendidikan Indonesia. 
              Saya terinspirasi oleh potensi teknologi untuk mengubah dunia dan ingin berkontribusi dalam pengembangan solusi inovatif.
            </p>
            
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Fokus & Minat
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Saat ini saya fokus pada pengembangan web full-stack dan Artificial Intelligence (AI). 
              Saya tertarik dengan machine learning, keamanan siber, dan pengembangan sistem embedded. 
              Teknologi yang sedang saya pelajari meliputi React, Next.js, Node.js, dan berbagai protokol AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Di Luar Teknologi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Selain coding, saya aktif dalam organisasi kampus sebagai anggota Himpunan Mahasiswa Teknik Komputer. 
              Saya juga menikmati fotografi, terutama dalam mengabadikan momen-momen kampus dan kegiatan organisasi. 
              Percaya bahwa keseimbangan antara teknologi dan aktivitas sosial penting untuk pengembangan diri yang holistik.
            </p>
            
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
              Tujuan Karir
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Saya bercita-cita menjadi Computer Engineer yang dapat mengembangkan solusi teknologi yang berdampak positif 
              bagi masyarakat. Ingin berkontribusi dalam proyek-proyek inovatif yang menggabungkan web development, 
              AI, dan machine learning untuk menciptakan sistem yang cerdas dan berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 