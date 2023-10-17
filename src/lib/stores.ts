import { get, writable } from 'svelte/store';

// Create a 'count' store that is a writable store, defaulting at 0
export const count = writable(0);

export const status = writable('offline');

export const messages = writable([]);