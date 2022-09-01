// Based loosely on: https://www.chrsjxn.io/svelte/theme-store

import { browser } from '$app/environment';
import { Optional } from '../data-structures/Optional';
import type { Subscriber, Writable } from 'svelte/store';
import { LocalStorageKey, LocalStore } from './LocalStore';

class DarkmodeStoreClass implements Writable<boolean> {
  public constructor() {
    this.localStore.subscribe(this.handleLocalstoreChange);
    this.darkmodeQuery?.addEventListener('change', this.handleBrowserSettingsChange);
  }

  private subscriptions: Subscriber<boolean>[] = [];

  private localStore = new LocalStore(LocalStorageKey.darkmode, null);
  private darkmodeQuery = browser ?
    window.matchMedia('(prefers-color-scheme: dark)') : undefined;
  private get defaultValue(): boolean {
    return !!this.darkmodeQuery?.matches;
  }

  // Subscription update handlers
  private pushUpdate = (value: boolean) => {
    this.subscriptions.map(sub => sub(value));
  }
  private handleLocalstoreChange = (value: Optional<boolean>) => {
    if (value !== null) { this.pushUpdate(value); }
    else { this.pushUpdate(this.defaultValue); }
  }
  private handleBrowserSettingsChange = (event: MediaQueryListEvent) =>
    this.localStore.get() !== null ? this.pushUpdate(event.matches) : null;

  // Exposed store contract
  public subscribe = (subscribe: Subscriber<boolean>): (() => void) => {
    const storedValue = this.localStore.get();
    subscribe(storedValue === null ? this.defaultValue : storedValue);
    this.subscriptions.push(subscribe);
    return () => {
      this.subscriptions.splice(
        this.subscriptions.findIndex(x => x === subscribe),
        1);
    };
  }
  public set = this.localStore.set;
  public update = (updater: (value: boolean) => boolean) => {
    this.localStore.update(
      v => updater(Optional.fallback(v, this.defaultValue)));
  }
}

export const darkmode = new DarkmodeStoreClass();