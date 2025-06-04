import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Game Development',
    description:
      'Currently interning as a game developer at Eframe Infomedia, specializing in Unity engine with C#. Creating interactive game features, environments, and learning advanced game mechanics.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Full-Stack Web Development',
    description:
      'Proficient in modern web technologies including React.js, Node.js, HTML, CSS, Bootstrap, and Tailwind CSS. Building responsive and dynamic web applications with MySQL database integration.',
    icon: LockClosedIcon,
  },
  {
    name: 'AI/ML & Data Science',
    description:
      'Experienced with TensorFlow, Keras, Pandas, and Matplotlib for machine learning projects. Developed geospatial satellite image object detection systems with Flask deployment.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Programming Languages',
    description:
      'Strong foundation in Java, Python, and C# programming. Experience with multiple development environments including JupyterNotebook for data science and Unity for game development.',
    icon: FingerPrintIcon,
  },
]

export default function SkillsSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Technical Skills</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Computer Science student with diverse technical expertise
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            As a B.Tech CSE student with an 8.36 CGPA, I bring a solid foundation in computer science concepts along with hands-on experience in game development, web technologies, and AI/ML projects.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 