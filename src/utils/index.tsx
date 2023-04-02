export const ROWS = 3;
export const COLUMNS = 4;

export const generateRandomIntegerInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateMolePosition = ():Array<number> => {
  const newPosition = [generateRandomIntegerInRange(0, ROWS - 1), generateRandomIntegerInRange(0, COLUMNS - 1)]
  console.log(newPosition)
  return newPosition
}
