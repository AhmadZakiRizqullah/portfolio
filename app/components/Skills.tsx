const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "TailwindCSS", icon: "🌊" },
        { name: "HTML/CSS", icon: "🌐" },
        { name: "JavaScript", icon: "JS" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "PHP", icon: "🐘" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" }
      ]
    },
    {
      category: "Database & Cloud",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Firebase", icon: "🔥" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "VS Code", icon: "💻" },
        { name: "Figma", icon: "🎨" },
        { name: "Postman", icon: "📮" },
        { name: "Canva", icon: "🎨" },
        { name: "Agile", icon: "🔄" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 text-center">
        Keahlian & Teknologi
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Teknologi yang saya kuasai dan sedang dalam proses pembelajaran. 
        Fokus pada pengembangan web, AI, dan machine learning.
      </p>
      
      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl p-4 rounded-xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all hover:-translate-y-1 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-2xl mb-2">{skill.icon}</span>
                  <h4 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-sm">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 