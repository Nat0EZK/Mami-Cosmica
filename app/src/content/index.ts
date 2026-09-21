import * as es from "./es";
import * as en from "./en";
import type { Locale } from "./types";

export type { Locale, ServiceItem, ServiceGroup, PreventaEdition } from "./types";

/** Contacto directo por WhatsApp. Igual en ambos idiomas: no es texto, es un enlace. */
export const whatsapp = "https://wa.me/message/4T7CI7BQ5PPDO1";

export type ContentShape = typeof es;

export const content: Record<Locale, ContentShape> = { es, en };
