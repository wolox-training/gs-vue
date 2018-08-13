import { isArray } from './utils';

export function min(first, ...rest) {
  if (isArray(first)) {
    return Math.min(...first);
  }
  return Math.min(first, ...rest);
}

export function copy() {

}
