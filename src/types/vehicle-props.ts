export interface Vehicle {
  advert_classification?: string;
  advert_type?: string;
  advertisable_id?: number;
  optional_extras?: unknown[];
  card_guid?: number;
  admin_fee?: string;
  attention_grabber?: string;
  battery_kwh?: null;
  battery_warranty_miles?: null;
  battery_warranty_years?: null;
  body_type?: string;
  body_type_slug?: string;
  co2?: number;
  connector_type?: string;
  mpg?: number;
  cap_database?: string;
  "coin-series"?: string;
  colour?: string;
  condition?: string;
  contents?: unknown[];
  compunknown?: string;
  date_first_advertised?: string;
  date_first_registered?: string;
  date_mot_expires?: string;
  derivative?: string;
  description?: string;
  doors?: string;
  drivetrain?: string;
  engine_size?: string;
  euro_emissions_standard?: null;
  extra_description?: string;
  fuel_type?: string;
  fuel_type_slug?: string;
  insurance_group?: string;
  location?: string;
  location_slug?: string;
  make?: string;
  make_slug?: string;
  manufacturer_colour?: null;
  meta_description?: string;
  meta_keywords?: string;
  meta_title?: string;
  model?: string;
  model_year?: null;
  name?: string;
  odometer_units?: string;
  odometer_value?: number;
  original_price?: string;
  plate?: string;
  previous_keepers?: number;
  price?: string;
  price_ex_vat?: string;
  price_excluding_vat?: string;
  price_when_new?: null;
  range?: string;
  range_slug?: string;
  range_wltp?: null;
  reserved?: string;
  seats?: string;
  service_history?: null;
  site?: string;
  site_slug?: string;
  slug?: string;
  standard_equipment?: StandardEquipment;
  status?: string;
  stock_id?: string;
  tags?: unknown[];
  tax_rate_value?: string;
  technical_data?: TechnicalData;
  template_slug?: null;
  transmission?: string;
  vat?: string;
  vat_scheme?: string;
  videos?: string;
  vin?: string;
  vrm?: string;
  website_url?: string;
  year?: string;
  media_urls?: MediaUrl[];
  original_media_urls?: string[];
  finance?: null;
  monthly_payment?: string;
  feature_classification?: unknown[][];
  extra_offers?: unknown[];
  wheelchair_aTechnicalPropertyess?: number;
  electric_data?: null;
  battery_usable_capacity_kwh?: string;
  charge_times?: string;
  price_indicator?: string;
  ulez_compliant?: boolean;
  insights?: string;
  vehicle_source?: string;
}

export interface VehicleCard {
  name: string;
  plate: string;
  make: string;
  model: string;
  derivative: string;
  advert_classification: string;
  fuel_type: string;
  transmission: string;
  media_urls: MediaUrl[];
  price: string;
  original_price?: string;
  monthly_payment: string;
  finance: string;
}

export interface Price {
  price: string;
  original_price: string;
  monthly_payment?: string;
  finance?: string;
}

export interface MediaUrl {
  meta?: unknown[];
  large?: string;
  thumb?: string;
  medium?: string;
  hotspots?: unknown[];
  original?: string;
}

export interface TechnicalData {
  TechnicalProperty?: TechnicalProperty;
  width?: TechnicalProperty;
  height?: TechnicalProperty;
  length?: TechnicalProperty;
  "co2-gkm"?: TechnicalProperty;
  cylinders?: TechnicalProperty;
  "top-speed"?: TechnicalProperty;
  "coin-series"?: TechnicalProperty;
  "no-of-seats"?: TechnicalProperty;
  "ec-urban-mpg"?: TechnicalProperty;
  transmission?: TechnicalProperty;
  "ec-combined-mpg"?: TechnicalProperty;
  "0-to-60-mph-secs"?: TechnicalProperty;
  "engine-power-bhp"?: TechnicalProperty;
  "insurance-group-2"?: TechnicalProperty;
  "badge-power-litres"?: TechnicalProperty;
  "ec-extra-urban-mpg"?: TechnicalProperty;
  "standard-euro-emissions"?: TechnicalProperty;
  "fuel-tank-capacity-litres"?: TechnicalProperty;
  "luggage-capacity-seats-up"?: TechnicalProperty;
  "luggage-capacity-seats-down"?: TechnicalProperty;
  "ec-directive-1999100ec-applies"?: TechnicalProperty;
  "insurance-group-1-50-effective-january-07"?: TechnicalProperty;
}

export interface TechnicalProperty {
  name?: string;
  value?: string;
  category?: string;
}

export interface StandardEquipment {
  Standard?: string[];
}
