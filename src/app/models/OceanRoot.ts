export interface OceanRoot {
    tpdoc_num: string
    isContainerSearch: boolean
    origin: Origin
    destination: Destination
    containers: Container[]
  }
  
  export interface Origin {
    terminal: string
    geo_site: string
    city: string
    state: string
    country: string
    country_code: string
    geoid_city: string
    site_type: string
  }
  
  export interface Destination {
    terminal: string
    geo_site: string
    city: string
    state: string
    country: string
    country_code: string
    geoid_city: string
    site_type: string
  }
  
  export interface Container {
    container_num: string
    container_size: string
    container_type: string
    iso_code: string
    operator: string
    locations: Location[]
    eta_final_delivery: string
    latest: Latest
    status: string
  }
  
  export interface Location {
    terminal: string
    geo_site: string
    city: string
    state: string
    country: string
    country_code: string
    geoid_city: string
    site_type: string
    events: Event[]
  }
  
  export interface Event {
    activity: string
    stempty: boolean
    actfor: string
    vessel_name: string
    voyage_num: string
    vessel_num: string
    actual_time?: string
    rkem_move?: string
    is_cancelled?: boolean
    is_current: boolean
    expected_time?: string
  }
  
  export interface Latest {
    actual_time: string
    activity: string
    stempty: boolean
    actfor: string
    geo_site: string
    city: string
    state: string
    country: string
    country_code: string
  }
  