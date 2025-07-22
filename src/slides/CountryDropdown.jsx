import React, { useState } from 'react';

export default function CountryDropdown() {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div>
      <select
        name="country"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        <option value="UAE">UAE</option>
        <option value="Dubai">Dubai</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
        <option value="Other">Other</option>
      </select>

      {selectedCountry === 'Other' && (
        <div style={{ marginTop: '10px' }}>
          <input
            type="text"
            name="otherCountry"
            placeholder="Enter your country"
          />
        </div>
      )}
    </div>
  );
}
