// components/FeaturedProjects.tsx
"use client";

import Image from "next/image";

const ProjectFeatured = () => {
  return (
    <section id="projects" className="py-16 bg-white mb-20 mt-20">
      <div className="max-w-6xl mx-auto px-4 border-solid">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-10">
          A showcase of my recent work and technical expertise
        </p>

        {/* Projects Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
            <Image
              src="/bakers-palace.png"
              alt="E-Commerce Platform"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Full-stack e-commerce solution with React, Node.js, and Stripe integration
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer ">React</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">Node.js</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">MongoDB</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">Stripe</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
          
            <Image
              src="/tokyo-tower.jpeg"
              alt="Task Management App"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Task Management App</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Collaborative project management tool with real-time updates
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">Next.js</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer ">TypeScript</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">Prisma</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">WebSockets</span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
          
            <Image
              src="/perfect-trip.png"
              alt="Analytics Dashboard"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Business intelligence dashboard with interactive charts and real-time data
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">React</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">D3.js</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">Python</span>
                <span className="bg-gray-100 px-3 py-1 text-xs rounded cursor-pointer">FastAPI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default  ProjectFeatured;