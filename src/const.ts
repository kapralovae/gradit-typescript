export const TENTH_SHARE = 10;

export function getRegularForCheckId (id: number, countFilms: number) {
  return `^[1-9]$|^[${Math.floor(id / TENTH_SHARE)}][${Number(id) % TENTH_SHARE}]$|^(${countFilms})`;
}
