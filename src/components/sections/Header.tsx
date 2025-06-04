'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Modern Navbar */}
      <nav className="bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-[9997] shadow-sm isolate">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3 relative z-[9998]">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Arghya Ghosh
                </h1>
                <p className="text-xs text-gray-500">Game Developer & Full-Stack</p>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="relative z-[9998]">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[500px] grid-cols-2 bg-white">
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Background</h4>
                          <NavigationMenuLink className="group block space-y-2 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              🎓 Education
                            </div>
                            <p className="text-sm text-gray-600">
                              B.Tech CSE from Guru Nanak Institute of Technology (CGPA: 8.36)
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="group block space-y-2 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              💼 Experience
                            </div>
                            <p className="text-sm text-gray-600">
                              Game Development Intern at Eframe Infomedia Pvt. Ltd
                            </p>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900">Skills</h4>
                          <NavigationMenuLink className="group block space-y-2 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              🚀 Technologies
                            </div>
                            <p className="text-sm text-gray-600">
                              Java, Python, C#, React.js, Node.js, Unity
                            </p>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="group block space-y-2 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              🎮 Game Dev
                            </div>
                            <p className="text-sm text-gray-600">
                              Unity Engine, C# Game Development, Interactive Features
                            </p>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                      Projects
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[600px] grid-cols-3 bg-white">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-3">Game Development</h4>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Snake Game
                            </div>
                            <p className="text-xs text-gray-600">C# Windows Forms application</p>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Unity Projects
                            </div>
                            <p className="text-xs text-gray-600">Interactive game features</p>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-3">Web Development</h4>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Portfolio Website
                            </div>
                            <p className="text-xs text-gray-600">React.js, Node.js, MySQL</p>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Responsive Design
                            </div>
                            <p className="text-xs text-gray-600">HTML, Tailwind CSS, Bootstrap</p>
                          </NavigationMenuLink>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-gray-900 mb-3">AI/ML</h4>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Object Detection
                            </div>
                            <p className="text-xs text-gray-600">TensorFlow, Keras</p>
                          </NavigationMenuLink>
                          <NavigationMenuLink className="group block rounded-lg p-3 hover:bg-gray-50 transition-colors">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600 text-sm">
                              Data Analysis
                            </div>
                            <p className="text-xs text-gray-600">Pandas, Matplotlib</p>
                          </NavigationMenuLink>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-6 w-[450px] bg-white">
                        <NavigationMenuLink className="group flex items-start space-x-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-600 text-xl">🎮</span>
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              Game Development
                            </div>
                            <p className="text-sm text-gray-600">
                              Unity engine development with C#, interactive features and game mechanics
                            </p>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="group flex items-start space-x-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 text-xl">💻</span>
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              Web Development
                            </div>
                            <p className="text-sm text-gray-600">
                              Full-stack development with React.js, Node.js, and modern web technologies
                            </p>
                          </div>
                        </NavigationMenuLink>
                        <NavigationMenuLink className="group flex items-start space-x-4 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-green-600 text-xl">🤖</span>
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              AI/ML Solutions
                            </div>
                            <p className="text-sm text-gray-600">
                              Machine learning projects using TensorFlow, data analysis and visualization
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Resume
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Button */}
            <div className="flex items-center space-x-4 relative z-[9998]">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Download CV
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-40">
          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Arghya Ghosh Portfolio</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Get in touch <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Arghya Ghosh Portfolio</span>
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Get in touch
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
    </>
  )
} 