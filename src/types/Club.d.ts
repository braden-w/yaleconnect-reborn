export interface Club {
  id: number;
  name: string;
  type: string;
  category: null | string;
  email: null | string;
  website: null | string;
  phone: null | string;
  logo: null | string;
  address: null | string;
  benefits: null | string;
  goals: null | string;
  mission: null | string;
  constitution: null | string;
  officers: Officer[];
}

export interface Officer {
  name: string
  email: string
}