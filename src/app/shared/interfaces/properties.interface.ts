export interface Properties {
  properties: Property[];
}

export interface Property {
  _id: string;
  title: string;
  address: string;
  location: Location;
  currency: string;
  price: number;
  description: string;
  isFavorite: boolean;
  tags: string[];
  features: Features;
}

export interface Features {
  propertyType: string;
  levels: number;
  lotSize: number;
  garage: number;
  rooms: number;
  bathrooms: number;
  airConditioner: boolean;
  terrace: boolean;
  garden: boolean;
  serviceRoom: boolean;
  warehouse: boolean;
  security: boolean;
}

export interface Location {
  latitude: string;
  longitude: string;
}
