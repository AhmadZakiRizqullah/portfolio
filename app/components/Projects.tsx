import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Go Mulung - Sistem Pendaftaran Driver",
      description: "Website untuk pendaftaran driver layanan transportasi sampah Go-mulung dengan sistem manajemen pengguna dan tracking real-time.",
      image: "/image/Mulung.png",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      category: "Web Development",
      github: "https://github.com/AhmadZakiRizqullah/go-mulung",
      live: "https://go-mulung.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Penilaian Proker HIMA",
      description: "Sistem penilaian proker Himpunan Mahasiswa Teknik Komputer UPI dengan fitur penilaian proker, feedback dosen, dan dashboard organisator.",
      image: "/image/LogoPPK.png",
      technologies: ["PHP", "MySQL", "Bootstrap", "CSS"],
      category: "Web Development",
      github: "https://github.com/AhmadZakiRizqullah/ProgramPenilaianProkerHIMA",
      live: null
    },
    {
      id: 3,
      title: "IoT Distance Monitoring",
      description: "Sistem monitoring lingkungan kampus menggunakan sensor HC-SR04 dan Arduino untuk mengukur Jarak.",
      image: "/image/iot-project.png",
      technologies: ["Arduino", "Node.js", "MQTT", "React"],
      category: "IoT & Embedded",
      github: "https://github.com/AhmadZakiRizqullah/iot-campus",
      live: null
    },
    {
      id: 4,
      title: " ",
      description: "Analisis Harga Rumah di Bandung Menggunakan Metode Regresi Linier",
      image: "/image/ml-project.png",
      technologies: ["Python", "Google Colab"],
      category: "Probability and Statistic",
      github: "https://github.com/AhmadZakiRizqullah/RegresiLinier",
      live: null
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem manajemen inventori, pembayaran, dan dashboard admin.",
      image: "/image/ecommerce.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      category: "Web Development",
      github: "https://github.com/AhmadZakiRizqullah/ecommerce",
      live: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 6,
      title: "Stock Calculator",
      description: "Aplikasi kalkulator harga saham dengan menggunakan Flutter dan Dart.",
      image: "/image/Calcu.png",
      technologies: ["Flutter", "Dart"],
      category: "Mobile Development",
      github: "https://github.com/AhmadZakiRizqullah/KalkulatorSaham",
      live: null
    },

  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Proyek Unggulan
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Kumpulan proyek yang menunjukkan kemampuan teknis dan kreativitas dalam memecahkan masalah dunia nyata.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-2"
          >
            <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-700">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-3 group-hover:from-purple-600 group-hover:to-pink-600 dark:group-hover:from-purple-400 dark:group-hover:to-pink-400 transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-center text-sm font-medium rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all hover:-translate-y-1 shadow-lg"
        >
          Lihat Semua Proyek
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Projects; 