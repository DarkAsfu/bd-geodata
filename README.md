# bd-geodata

**Offline geographic data for Bangladesh**, including divisions, districts, upazilas, unions, and areas. This package provides a comprehensive dataset of geographic locations within Bangladesh, making it an essential tool for developers, researchers, and anyone working with geographic data in the region.

## Key Features

- **No Internet Required**: Fully offline dataset, ideal for local development and offline use cases.
- **Hierarchical Data**: Organized data structure for easy access to divisions, districts, upazilas, unions, and areas.
- **Lightweight & Fast**: Optimized for quick lookups and low memory usage.
- **Easy to Use**: Simple APIs to fetch data based on IDs for seamless integration.

## Data Structure Overview

The data is divided into five hierarchical levels:

1. **Divisions** (e.g., Dhaka, Chattogram)
2. **Districts** (e.g., Comilla, Feni)
3. **Upazilas** (e.g., Debidwar, Barura)
4. **Unions** (e.g., Subil, North Gunaighor)
5. **Areas** (e.g., Barura, Brahmanpara)

### Division Names with IDs

Here is a table of division names with their corresponding IDs for reference:

| Division ID | Division Name | Bengali Name |
| --- | --- | --- |
| 1 | Chattagram | চট্টগ্রাম |
| 2 | Rajshahi | রাজশাহী |
| 3 | Khulna | খুলনা |
| 4 | Barisal | বরিশাল |
| 5 | Sylhet | সিলেট |
| 6 | Dhaka | ঢাকা |
| 7 | Rangpur | রংপুর |
| 8 | Mymensingh | ময়মনসিংহ |

### Districts in Chattagram Division (ID: 1)

To give you an example of the districts available in **Chattagram**, here are some district names under Division ID 1:

| District ID | District Name | Bengali Name |
| --- | --- | --- |
| 1 | Comilla | কুমিল্লা |
| 2 | Feni | ফেনী |
| 3 | Brahmanbaria | ব্রাহ্মণবাড়িয়া |

This hierarchy continues down to the area level.

---

## Installation

You can install the package using npm:

```bash
npm install bd-geodata
```

---

## Usage

After installation, you can import the package and use its functions to access the geographic data. Here are some example use cases:

### Example 1: Get All Divisions

```javascript
import { getDivisions } from 'bd-geodata';

console.log(getDivisions());
```

### Example 2: Get Districts by Division ID

```javascript
import { getDistrictsByDivision } from 'bd-geodata';

// Fetch districts in Division ID: 1 (Chattagram)
console.log(getDistrictsByDivision('1'));
```

### Example 3: Get Upazilas by District ID

```javascript
import { getUpazilasByDistrict } from 'bd-geodata';

// Fetch upazilas in District ID: 1 (Comilla)
console.log(getUpazilasByDistrict('1'));
```

### Example 4: Get Unions by Upazila ID

```javascript
import { getUnionsByUpazila } from 'bd-geodata';

// Fetch unions in Upazila ID: 1 (Debidwar)
console.log(getUnionsByUpazila('1'));
```

### Example 5: Get Areas by District ID

```javascript
import { getAreasByDistrict } from 'bd-geodata';

// Fetch areas in District ID: 1 (Comilla)
console.log(getAreasByDistrict('1'));
```

---

## Visualization Example (Optional)

If you want to visualize this data using a tool like **D3.js** or **Google Charts**, you can easily map the hierarchical relationships.

Here is an example of how you might represent the divisions, districts, upazilas, and areas in a **tree structure** using D3.js:

```javascript
const data = {
  name: 'Bangladesh',
  children: [
    {
      name: 'Chattagram',
      children: [
        {
          name: 'Comilla',
          children: [
            { name: 'Debidwar' },
            { name: 'Barura' }
          ]
        },
        {
          name: 'Feni',
          children: [
            { name: 'Feni Sadar' }
          ]
        }
      ]
    }
  ]
};

// Use D3.js to generate a tree visualization from the data object.
```

This code snippet shows the hierarchical structure for a division with its districts, upazilas, and areas. You can use tools like **D3.js** or **Chart.js** to visualize the geographic hierarchy.

---

## API Documentation

### `getDivisions()`
- **Returns**: An array of all divisions in Bangladesh.

### `getDistrictsByDivision(divisionId)`
- **Params**:
  - `divisionId`: The ID of the division (string).
- **Returns**: An array of districts belonging to the specified division.

### `getUpazilasByDistrict(districtId)`
- **Params**:
  - `districtId`: The ID of the district (string).
- **Returns**: An array of upazilas belonging to the specified district.

### `getUnionsByUpazila(upazilaId)`
- **Params**:
  - `upazilaId`: The ID of the upazila (string).
- **Returns**: An array of unions belonging to the specified upazila.

### `getAreasByDistrict(districtId)`
- **Params**:
  - `districtId`: The ID of the district (string).
- **Returns**: An array of areas belonging to the specified district.

---

## Use Cases

### **1. Emergency Response Systems**
This data can be used by government or NGOs to develop applications that help citizens quickly identify their nearest upazilas, unions, and areas in disaster relief efforts.

### **2. Geographic Visualizations**
The package can be used in mapping applications to visualize the boundaries and hierarchical relationships between divisions, districts, upazilas, unions, and areas.

### **3. Offline Applications**
For apps that need to function in areas with low or no internet connectivity, this package provides an offline database for geographic queries.

---

## Contribution

If you'd like to contribute to this package, feel free to submit a pull request or open an issue. Contributions for more data or improvements in functionality are always welcome!

---

## License

This package is licensed under the MIT License.

---

## Roadmap

- **Add Thana Data**: Extend the package to include thana-level data.
- **Data Updates**: Ensure data is kept up to date with official government sources.
- **Integration with Map APIs**: Provide more functions to integrate with mapping services like Google Maps or Leaflet.

---

## Frontend Example

Here is an example of how you might use this package in a React application to dynamically fetch and display geographic data based on user selection:

```jsx
import React, { useState, useEffect } from 'react';
import { getDivisions, getDistrictsByDivision, getUpazilasByDistrict, getUnionsByUpazila, getAreasByDistrict } from 'bd-geodata';

const TestPage = () => {
    const [division, setDivision] = useState('');
    const [district, setDistrict] = useState('');
    const [upazila, setUpazila] = useState('');
    const [union, setUnion] = useState('');
    const [selectedArea, setSelectedArea] = useState([]);
    const [areas, setAreas] = useState([]);

    useEffect(() => {
        const fetchAreas = async () => {
            const areasData = getAreasByDistrict(district);
            setAreas(areasData);
        };

        fetchAreas();
    }, [district]);

    const handleDivisionChange = (e) => {
        setDivision(e.target.value);
    };

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
    };

    const handleUpazilaChange = (e) => {
        setUpazila(e.target.value);
    };

    const handleUnionChange = (e) => {
        setUnion(e.target.value);
    };

    const handleAreaChange = (e) =>{
        setSelectedArea(e.target.value);
    }

    const divisions = getDivisions();
    const districts = getDistrictsByDivision(division);
    const upazilas = getUpazilasByDistrict(district);
    const unions = getUnionsByUpazila(upazila);

    return (
        <div>
            <form className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between py-10 gap-4 w-10/12 md:w-8/12 lg:w-7/12 mx-auto">
                <select className="border ps-6 pe-10 py-3" value={division} onChange={handleDivisionChange}>
                    <option value="">Select Division</option>
                    {divisions.map((division) => (
                        <option key={division.id} value={division.id}>{division.name}</option>
                    ))}
                </select>
                <select className="border ps-6 pe-10 py-3" value={district} onChange={handleDistrictChange}>
                    <option value="">Select District</option>
                    {districts.map((district) => (
                        <option key={district.id} value={district.id}>{district.name}</option>
                    ))}
                </select>
                <select className="border ps-6 pe-10 py-3" value={upazila} onChange={handleUpazilaChange}>
                    <option value="">Select Upazila</option>
                    {upazilas.map((upazila) => (
                        <option key={upazila.id} value={upazila.id}>{upazila.name}</option>
                    ))}
                </select>
                <select className="border ps-6 pe-10 py-3" value={union} onChange={handleUnionChange}>
                    <option value="">Select Union</option>
                    {unions.map((union) => (
                        <option key={union.id} value={union.id}>{union.name}</option>
                    ))}
                </select>
                <select className="border ps-6 pe-10 py-3" value={selectedArea} onChange={handleAreaChange}>
                    <option value="">Select Area</option>
                    {areas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default TestPage;
