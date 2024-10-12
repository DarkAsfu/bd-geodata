// Import JSON data directly
import divisions from './data/divisions.json';
import districts from './data/districts.json';
import upazilas from './data/upazilas.json';
import unions from './data/unions.json';
import districtArea from './data/district-area.json';
// Function to get all divisions
export function getDivisions() {
    return divisions;
}

// Function to get districts by division ID
export function getDistrictsByDivision(divisionId) {
    return districts.filter(district => district.division_id === divisionId);
}

// Function to get upazilas by district ID
export function getUpazilasByDistrict(districtId) {
    return upazilas.filter(upazila => upazila.district_id === districtId);
}

// Function to get unions by upazila ID
export function getUnionsByUpazila(upazilaId) {
    return unions.filter(union => union.upazilla_id === upazilaId);
}

// Function to get areas by district ID
export function getAreasByDistrict(districtId) {
    return districtArea.filter(area => area.district_id === districtId)[0].areas;
}
