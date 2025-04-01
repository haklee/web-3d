import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: "250401",
      title: "Project 250401",
      description: "A 3D web project",
      date: "April 1, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Web 3D Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore interactive 3D experiences on the web
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/${project.id}`}
              className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-500/10 bg-white dark:bg-gray-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
