import { getDivisions, getDistrictsByDivision, getUpazilasByDistrict, getUnionsByUpazila } from 'index';

// Test the functions
console.log('Divisions:', getDivisions());

console.log('Districts in Division 1:', getDistrictsByDivision('1'));

console.log('Upazilas in District 1:', getUpazilasByDistrict('1'));

console.log('Unions in Upazila 1:', getUnionsByUpazila('1'));
