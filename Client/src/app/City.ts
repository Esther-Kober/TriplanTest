export interface City {
    place: {city:string};
    boundingBox?: object;
    bounds: {northeast:{lat:number,lng:number} };
    id?:number;
}