import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** merge classes with tailwind-merge with clsx full feature */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
