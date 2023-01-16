export type TCategory = {
    category_id: string;
    category_name: string;
    category_icon: string;
    services: TService[];
}

export type TService = {
    service_id: string;
    service_name: string;
    service_icon: string;
}