import { isArray } from './utils';

export function min(first, ...rest) {
  if (first === undefined) {
    return undefined;
  }
  if (isArray(first)) {
    return Math.min(...first);
  }
  return Math.min(first, ...rest);
}

export function copy(arg) {
  if (isArray(arg)) {
    return [...arg];
  }
  return { ...arg };
}

export function reverseMerge(arr1, arr2) {
  return [...arr2, ...arr1];
}
