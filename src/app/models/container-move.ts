export interface ContainerMove {
    container_move_id: string
    container_id: string
    eqpno: string
    move: string
    activity: string
    next_activity: string
    activity_timestamp: string
    move_timestamp: string
    move_sequence: number
    next_move_timestamp: string
    last_update_timestamp: string
    activity_for: any
    activity_week: string
    is_empty: boolean
    cargo_weight_kg: number
    cargo_weight_lb: number
    load_port_location_id: string
    discharge_port_location_id: string
    activity_location_id: string
    next_move_location_id: string
    port_of_receipt_location_id: string
    place_of_delivery_location_id: string
    final_discharge_port_location_id: string
    service_line_code: string
    damage_code: any
    vessel_id: string
    voyage_code: string
    train_code: any
    train_trip_number: any
    railcar_code: any
    slot_vessel: string
    bay_vessel: string
    carrier_code: string
    operator_code: string
    vessel_next_id: string
    next_voyage_code: string
    equipment_type: string
    equipment_type_rock: string
    equipment_size: string
    equipment_group: string
    equipment_dimensions: string
    equipment_own_type: string
    equipment_inspected_status: boolean
    equipment_cleaned_status: boolean
    equipment_sound_status: boolean
    equipment_surveyed_status: boolean
    equipment_repair_auth: boolean
    equipment_repair_status: boolean
    equipment_blocked_status: boolean
    equipment_redelivery_status: boolean
    equipment_sell_scrap_status: boolean
    is_live_reference: boolean
    receipt_service: string
    delivery_service: string
    genset_id: any
    placomp: any
    placontr: any
    plawho: any
    shipment_version_instance_id: string
    booking_number: string
    contractual_customer_id: string
    rkem_booking_number: string
    work_order: any
    customer_reference: any
    location_id: string
    location: string
    location_type: string
    site_type: string
    lat: number
    lon: number
    geohash: string
    city_id: string
    city: string
    country_id: string
    country: string
    cluster_id: string
    cluster: string
    region_id: string
    region: string
    loc_id: string
    loc: string
    pool_id: string
    pool: string
    stuffed_hs_commodity_code: string
    stuffed_commodity_name: string
    parent_commodity_name: string
    next_move: string
    next_activity_for: any
    next_move_empty: boolean
    next_operator_code: string
    prev_move: string
    prev_move_timestamp: string
    prev_activity_for: string
    prev_activity_location: string
    prev_move_empty: boolean
    prev_operator_code: string
    local1: any
    local2: any
    is_transhipment: string
  }
  