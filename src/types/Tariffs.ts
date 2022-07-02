
export type Bonus = {
  name: string,
  icon: string
}

export type TariffCategory = {
  id: number,
  name: string,
  accent: boolean,
  type: string,
}

export type Tariff = {
  id: number,
  name: string,
  speed: number,
  price: number,
  accent: boolean,
  features: string[],
  environment: string[],
  description: string,
  bonuses: Bonus[],
  category: TariffCategory
}