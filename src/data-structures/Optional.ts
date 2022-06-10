export type Optional<X> = X | null;

export namespace Optional {
  export const map: <X, Y>(f: (x: X) => Y, ox: Optional<X>) => Optional<Y> =
    (f, ox) => ox === null ? null : f(ox);

  export const fallback: <X>(ox: Optional<X>, alt: X) => X =
    (ox, alt) => ox === null ? alt : ox
}