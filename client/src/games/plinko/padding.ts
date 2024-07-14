const MULTIPLIER = 10000

export const pad = (n: number) => {
    return n * MULTIPLIER
}

export const unpad = (n: number) => {
    return Math.floor(n / MULTIPLIER)
}