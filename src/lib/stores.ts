import { writable, type Writable } from 'svelte/store';

export const count = writable(0);

export const status = writable('offline');

export const messages: Writable<Array<{content: string, response: string}>> = writable([]);