export const isEven = (x: number) => x % 2 === 0

export const typeOf = (obj: Record<string, string>) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
