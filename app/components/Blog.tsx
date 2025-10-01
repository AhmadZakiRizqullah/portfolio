import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Membangun Sistem IoT untuk Monitoring Lingkungan Kampus",
      excerpt: "Studi kasus lengkap tentang pengembangan sistem monitoring suhu, kelembaban, dan kualitas udara menggunakan Arduino dan Node.js.",
      category: "IoT & Embedded Systems",
      date: "15 Desember 2024",
      readTime: "8 min read",
      tags: ["IoT", "Arduino", "Node.js", "Sensor"],
      featured: true
    },
    {
      id: 2,
      title: "Optimasi Performa Website dengan Next.js dan Lighthouse",
      excerpt: "Panduan lengkap tentang cara meningkatkan skor Lighthouse dari 65 menjadi 95+ dengan teknik optimasi yang tepat.",
      category: "Web Development",
      date: "10 Desember 2024",
      readTime: "6 min read",
      tags: ["Next.js", "Performance", "Lighthouse", "SEO"]
    },
    {
      id: 3,
      title: "Implementasi Machine Learning untuk Prediksi IPK Mahasiswa",
      excerpt: "Proyek penelitian menggunakan algoritma Random Forest untuk memprediksi IPK mahasiswa berdasarkan data akademik.",
      category: "Machine Learning",
      date: "5 Desember 2024",
      readTime: "10 min read",
      tags: ["Python", "Scikit-learn", "Data Science", "Education"]
    },
    {
      id: 4,
      title: "Tutorial: Membuat REST API dengan Express.js dan MongoDB",
      excerpt: "Panduan step-by-step untuk membuat REST API yang scalable dengan Express.js, MongoDB, dan JWT authentication.",
      category: "Backend Development",
      date: "1 Desember 2024",
      readTime: "12 min read",
      tags: ["Express.js", "MongoDB", "JWT", "API"]
    }
  ];

  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Blog & Tulisan Teknis
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Berbagi pengetahuan dan pengalaman dalam pengembangan teknologi. 
        Tulisan ini membuktikan pemahaman mendalam tentang konsep teknis dan kemampuan menjelaskan dengan baik.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <article
            key={post.id}
            className={`bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-2 ${
              post.featured ? 'md:col-span-2' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3 hover:from-purple-600 hover:to-pink-600 dark:hover:from-purple-400 dark:hover:to-pink-400 transition-all">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                Baca Selengkapnya
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1 shadow-lg"
        >
          Lihat Semua Artikel
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Blog; 