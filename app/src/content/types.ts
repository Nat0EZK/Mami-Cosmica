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

/** Una portada. El interior del journal es idéntico en las seis. */
export type JournalCover = {
    image: string;
    name: string;
};

/** Foto o vídeo que enseña el interior, común a todas las portadas. */
export type JournalMedia = {
    type: "image" | "video";
    src: string;
    caption: string;
};
