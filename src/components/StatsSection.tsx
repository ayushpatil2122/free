export default function StatsSection() {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex -space-x-2 mb-4">
              <img
                src="/rupesh.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/fullu.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <img
                src="/aryan.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <h2 className="text-5xl font-bold">10,000+</h2>
            <p className="text-gray-600 text-lg">
              people subscribed across India to our website
            </p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-gray-600">Happy Investors</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">500 Cr+</p>
                <p className="text-gray-600">Value Recovered</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-gray-600">Years of Cumulative Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-gray-600">Investment Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  