import React, { useState } from 'react'

const FlightSearch = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departure: '',
    return: '',
    passengers: '1',
    tripType: 'one-way'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Flight search would connect to backend in real application')
  }

  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Search Flights
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Trip Type */}
        <div className="flex gap-4 justify-center">
          {['one-way', 'round-trip'].map((type) => (
            <label key={type} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={formData.tripType === type}
                onChange={handleChange}
                className="hidden"
              />
              <div className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                formData.tripType === type
                  ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500'
                  : 'border-gray-600 text-gray-400 hover:border-gray-500'
              }`}>
                {type === 'one-way' ? 'One Way' : 'Round Trip'}
              </div>
            </label>
          ))}
        </div>

        {/* From & To */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              From
            </label>
            <select
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 transition-all duration-300"
            >
              <option value="">Select departure city</option>
              <option value="Riyadh (RUH)">Riyadh (RUH)</option>
              <option value="Jeddah (JED)">Jeddah (JED)</option>
              <option value="Dubai (DXB)">Dubai (DXB)</option>
              <option value="Abu Dhabi (AUH)">Abu Dhabi (AUH)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              To
            </label>
            <select
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 transition-all duration-300"
            >
              <option value="">Select destination city</option>
              <option value="Riyadh (RUH)">Riyadh (RUH)</option>
              <option value="Jeddah (JED)">Jeddah (JED)</option>
              <option value="Dubai (DXB)">Dubai (DXB)</option>
              <option value="Abu Dhabi (AUH)">Abu Dhabi (AUH)</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Departure Date
            </label>
            <input
              type="date"
              name="departure"
              value={formData.departure}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 transition-all duration-300"
            />
          </div>

          {formData.tripType === 'round-trip' && (
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Return Date
              </label>
              <input
                type="date"
                name="return"
                value={formData.return}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 transition-all duration-300"
              />
            </div>
          )}
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">
            Passengers
          </label>
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-yellow-500 transition-all duration-300"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
        >
          Search Flights
        </button>
      </form>
    </div>
  )
}

export default FlightSearch