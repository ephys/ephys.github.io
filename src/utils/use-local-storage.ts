/**
 * Source: https://gist.github.com/Ephys/79974c286e92665dcaae9c8f5344afaf
 */

import { useState, useEffect, useCallback, useRef } from 'react';

const eventTargets = new WeakMap();

type SetStateFunction<T> = (val: undefined | T | ((oldState: T) => undefined | T)) => void;

function getEventTarget(storage: Storage) {
  if (eventTargets.has(storage)) {

    return eventTargets.get(storage);
  }

  let eventTarget;
  try {
    eventTarget = new EventTarget();
  } catch (e) {
    // fallback to a div as EventTarget on Safari
    // because EventTarget is not constructable on Safari
    eventTarget = document.createElement('div');
  }

  eventTargets.set(storage, eventTarget);

  return eventTarget;
}

export function createStorageHook(storage: Storage = new Storage()) {
  // window.onstorage only triggers cross-realm.
  // This is used to notify other useLocalStorage on the same page that it changed
  return function useStorage<T>(key: string, defaultValue?: T): [T, SetStateFunction<T>] {

    const eventTarget = getEventTarget(storage);
    const [value, setValueState] = useState(() => {
      const _value = localStorage.getItem(key);
      if (_value == null) {

        return defaultValue;
      }

      try {
        return JSON.parse(_value);
      } catch (e) {
        console.error('use-local-storage: invalid stored value format, resetting to default');
        console.error(e);

        return defaultValue;
      }
    });

    const currentValue = useRef(value);
    currentValue.current = value;

    const setValue = useCallback(val => {
      if (typeof val === 'function') {
        // @ts-ignore
        val = val(currentValue.current);
      }

      if (currentValue.current === val) {

        return;
      }

      currentValue.current = val;

      if (val === undefined) {
        localStorage.removeItem(key);
        setValueState(defaultValue);
      } else {
        setValueState(val);
        localStorage.setItem(key, JSON.stringify(val));
      }

      eventTarget.dispatchEvent(new CustomEvent(`uls:storage:${key}`, { detail: val }));
    }, [eventTarget, key, defaultValue]);

    useEffect(() => {
      function crossRealmOnChange(e: StorageEvent) {
        if (e.key !== key || e.storageArea !== storage) {

          return;
        }

        if (e.newValue === null) {
          setValue(undefined);

          return;
        }

        try {
          setValue(JSON.parse(e.newValue));
        } catch {
          /* ignore */
        }
      }

      function sameRealmOnChange(e: CustomEvent) {
        setValue(e.detail);
      }

      eventTarget.addEventListener(`uls:storage:${key}`, sameRealmOnChange);
      window.addEventListener('storage', crossRealmOnChange);

      return () => {
        eventTarget.removeEventListener(`uls:storage:${key}`, sameRealmOnChange);
        window.removeEventListener('storage', crossRealmOnChange);
      };
    }, [eventTarget, key, setValue]);

    return [value, setValue];
  };
}

export const useLocalStorage = createStorageHook(localStorage);
export const useSessionStorage = createStorageHook(sessionStorage);
