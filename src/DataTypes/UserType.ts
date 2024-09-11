export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string; // Optional jika tidak selalu ada
  age: number;
  gender: 'male' | 'female' | 'other'; // Bisa menggunakan union type
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string; // Bisa diubah ke tipe Date jika diolah lebih lanjut
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  ip: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  macAddress: string;
  university: string;
  bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      country: string;
    };
  };
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: {
    coin: string;
    wallet: string;
    network: string;
  };
  role: 'admin' | 'user' | 'guest'; // Role bisa menggunakan union type untuk membatasi nilai
};
