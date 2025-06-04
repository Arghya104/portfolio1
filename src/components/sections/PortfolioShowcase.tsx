export default function PortfolioShowcase() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">Featured Projects</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Showcasing my technical journey
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Snake Game (C#)
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Classic Snake Game developed using C# in Windows Forms application. Features growing snake mechanics, collision detection, and real-time scoring system.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <div className="size-full bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-6xl">🐍</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Geospatial Object Detection</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  AI/ML project using TensorFlow and Keras for satellite image analysis. Includes data processing with Pandas and Flask web deployment.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="w-full max-lg:max-w-xs bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white text-center">
                  <div className="text-4xl mb-2">🛰️</div>
                  <div className="text-sm font-medium">TensorFlow + Keras</div>
                  <div className="text-xs opacity-80">Satellite Image Analysis</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Portfolio Website</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Responsive portfolio built with HTML, Tailwind CSS, Bootstrap, React.js, Node.js, and MySQL for dynamic content management.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <div className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg p-4 text-white text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <div className="text-sm font-medium">Full-Stack Web App</div>
                  <div className="text-xs opacity-80">React.js + Node.js + MySQL</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Technical Skills & Tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Proficient in multiple programming languages and development environments. Currently expanding skills through internship and academic projects.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        skills.ts
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">resume.md</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    <div className="text-sm text-gray-300 font-mono">
                      <div className="text-purple-400">const</div>{' '}
                      <div className="text-yellow-300 inline">skills</div>{' '}
                      <div className="text-gray-300 inline">= {'{'}</div>
                      <div className="ml-4 mt-1">
                        <div className="text-blue-400 inline">languages</div>
                        <div className="text-gray-300 inline">: ['Java', 'Python', 'C#'],</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-blue-400 inline">frameworks</div>
                        <div className="text-gray-300 inline">: ['React.js', 'Unity'],</div>
                      </div>
                      <div className="ml-4">
                        <div className="text-blue-400 inline">tools</div>
                        <div className="text-gray-300 inline">: ['TensorFlow', 'MySQL']</div>
                      </div>
                      <div className="text-gray-300">{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 