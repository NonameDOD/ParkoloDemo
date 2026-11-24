export type AllapotTipus = "Foglalt" | "Szabad";
export interface ParkoloTipus {
  id: number;
  hely: string;
  allapot: AllapotTipus;
}

export const PARKOLOLISTA: ParkoloTipus[] = [
  {
    id: 1,
    hely: "A1",
    allapot: "Foglalt",
  },
  {
    id: 2,
    hely: "A2",
    allapot: "Foglalt",
  },
  {
    id: 3,
    hely: "A3",
    allapot: "Szabad",
  },
  {
    id: 4,
    hely: "A4",
    allapot: "Foglalt",
  },
  {
    id: 5,
    hely: "A5",
    allapot: "Szabad",
  },
  {
    id: 6,
    hely: "A6",
    allapot: "Foglalt",
  },
  {
    id: 7,
    hely: "A7",
    allapot: "Szabad",
  }
];