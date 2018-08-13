import { isArray } from './utils';

export function min(arg) {
  if (!isArray(arg)) {
    return arg;
  }
  return Math.min(...arg);
}

export function copy() {

}
