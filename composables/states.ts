export const useCounter = () => useState<number>('counter', () => 14)
export const useColor = () => useState<string>('color', () => 'pink')