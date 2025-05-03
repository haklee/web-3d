import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: "250503",
      title: "Image Gallery Practice",
      date: "May 3, 2025"
    },
    {
      id: "250425",
      title: "Conway's Game of Life in 3D",
      date: "April 25, 2025"
    },
    {
      id: "250421",
      title: "Dynamic Random Pixel Animation",
      date: "April 21, 2025"
    },
    {
      id: "250414",
      title: "Interactive 3D Dice",
      date: "April 14, 2025"
    },
    {
      id: "250411",
      title: "Halton Sequence Visualization",
      date: "April 11, 2025"
    },
    {
      id: "250408",
      title: "Dynamic Convex Hull",
      date: "April 8, 2025"
    },
    {
      id: "250404",
      title: "Exploding Squares",
      date: "April 4, 2025"
    },
    {
      id: "250401",
      title: "3D Cube Demo",
      date: "April 1, 2025"
    }    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-5xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2">
            Web 3D Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore interactive 3D experiences on the web
          </p>
        </div>
        <div className="space-y-8">
          {/* Featured Project (Most Recent) */}
          <Link
            href={`/${projects[0].id}`}
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8">
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      Latest Project
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {projects[0].date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {projects[0].title}
                  </h2>
                </div>
                <div className="flex items-center justify-end">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project
                    </span>
                    <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(1).map((project) => (
              <Link
                key={project.id}
                href={`/${project.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.date}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          View Project
                        </span>
                        <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
