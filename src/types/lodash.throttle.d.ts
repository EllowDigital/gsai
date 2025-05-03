
declare module 'lodash.throttle' {
  export default function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: {
      leading?: boolean;
      trailing?: boolean;
    }
  ): T;
}
