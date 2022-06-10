import { browser } from '$app/env';
import type { Optional } from 'data-structures/Optional';
import type { Subscriber, Updater, Writable } from 'svelte/store';

export enum LocalStorageKey {
  darkmode = 'darkmode-override',
  ghUsername = 'gh-username',
};

export type LocalStorageValue = {
  [LocalStorageKey.darkmode]: Optional<boolean>;
  [LocalStorageKey.ghUsername]: string;
};

// Proof: Every key in LocalStorageKey is indexed in LocalStorageValue
type _witness1 = LocalStorageValue[LocalStorageKey];

type SubscriptionMap = {
  [key in LocalStorageKey]: Subscriber<LocalStorageValue[key]>[];
};

export class LocalStore<K extends LocalStorageKey> implements Writable<LocalStorageValue[K]> {
  private static subscriptionMap: SubscriptionMap = {
    [LocalStorageKey.darkmode]: [],
    [LocalStorageKey.ghUsername]: [],
  };

  constructor(private storageKey: K, private defaultValue: LocalStorageValue[K]) { }

  public get = (): LocalStorageValue[K] => {
    if (!browser) { return this.defaultValue; }
    const item = localStorage.getItem(`*persisted-${this.storageKey}`);
    return item ? JSON.parse(item) : this.defaultValue;
  };

  public set = (value: LocalStorageValue[K]) => {
    if (!browser) { throw 'compile-time localstorage write impossible'; }
    localStorage.setItem(`*persisted-${this.storageKey}`, JSON.stringify(value));
    LocalStore.subscriptionMap[this.storageKey].forEach(sub => sub(value));
  };

  public subscribe = (subscribe: Subscriber<LocalStorageValue[K]>): (() => void) => {
    const subList = LocalStore.subscriptionMap[this.storageKey];
    subList.push(subscribe);
    subscribe(this.get());
    return () => {
      subList.splice(subList.findIndex(x => x === subscribe), 1);
    };
  };

  public update = (updater: Updater<LocalStorageValue[K]>) => this.set(updater(this.get()));
};
