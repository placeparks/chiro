import { Link } from 'react-router-dom'

export default function SymptomSidebar() {
  return (
    <div className="lg:w-72 shrink-0 space-y-4">
      <div className="rounded overflow-hidden shadow border border-gray-100">
        <div className="bg-[#5cb85c] px-4 py-3 text-center">
          <p className="text-white font-bold italic text-2xl" style={{ fontFamily: 'Georgia, serif' }}>Special Offer</p>
        </div>
        <div className="bg-white px-4 py-5 text-center">
          <p className="text-gray-700 text-base mb-1">Don't miss our</p>
          <p className="text-3xl font-black italic text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>exclusive</p>
          <p className="text-gray-700 text-base mb-4">new patient offer!</p>
          <Link to="/patients" className="inline-block bg-[#5cb85c] hover:bg-green-600 text-white font-bold rounded-full px-6 py-2 text-sm transition">
            LEARN MORE
          </Link>
        </div>
      </div>
      <div className="bg-white rounded shadow border border-gray-100 px-4 py-5 text-center">
        <p className="text-gray-700 text-sm mb-4">Schedule an appointment at one of our locations below:</p>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            CROWN POINT LOCATION
          </Link>
          <Link to="/locations" className="bg-[#f0a500] hover:bg-yellow-500 text-white font-black text-xs py-6 px-2 rounded text-center uppercase leading-tight transition">
            MERRILLVILLE LOCATION
          </Link>
        </div>
      </div>
      <Link to="/locations" className="block bg-[#2eafc0] hover:bg-teal-500 text-white font-black text-center py-4 rounded uppercase tracking-wide transition">
        OUR LOCATIONS:
      </Link>
    </div>
  )
}
