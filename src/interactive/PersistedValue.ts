import { browser } from '$app/env';
export enum PersistedKey {
  ghUsername = 'gh-username',
};

export const PersistedValue = <A>(key: PersistedKey) => ({
  get: (defaultVal: A): A => {
    try {
      const item = localStorage.getItem(`*persisted-${key}`);
      return item ? JSON.parse(item) : defaultVal;
    } catch {
      return defaultVal;
    }
  },
  set: (value: A): void => {
    if (!browser) { return; }
    localStorage.setItem(`*persisted-${key}`, JSON.stringify(value));
  },
});
