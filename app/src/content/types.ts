export type Locale = "es" | "en";

export type ServiceItem = {
    label: string;
    detail?: { title: string; body: string };
};

export type ServiceGroup = {
    title: string;
    image: { src: string; alt: string };
    items: ServiceItem[];
};

export type PreventaEdition = {
    image: string;
    name: string;
    subtitle: string;
    body: string;
    /** Hover-video preview. Not every edition has one yet. */
    video?: string;
};
