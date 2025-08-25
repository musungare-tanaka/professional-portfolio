import React from 'react'
import Image from 'next/image'

const WorkHistory = () => {
  const companies = [
    {
      name: "CICOSY Zimbabwe",
      logo: "/Images/cicosy_zimbabwe_cover.jpeg",
      alt: "CICOSY Zimbabwe Logo"
    },
    {
      name: "Uncommon",
      logo: "/Images/uncommon.jpeg", 
      alt: "Uncommon Logo"
    }
  ]

  return (
    <section className="py-16 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Organisations Worked For
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-300 mx-auto rounded-full"></div>
          <p className="text-blue-100 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Proud to have collaborated with these innovative organizations
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-700 hover:border-cyan-400/50 transform hover:-translate-y-2"
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Logo container with enhanced styling */}
                <div className="relative mb-6 p-4 bg-white rounded-xl shadow-lg border border-slate-600">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src={company.logo} 
                      alt={company.alt} 
                      width={120} 
                      height={120}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>

                {/* Company name */}
                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {company.name}
                </h3>

                {/* Decorative element */}
                <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-slate-800 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle pattern or additional info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/70 backdrop-blur-sm rounded-full border border-slate-600 shadow-sm">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-blue-100 font-medium">Open to new opportunities</span>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </section>
  )
}

export default WorkHistory