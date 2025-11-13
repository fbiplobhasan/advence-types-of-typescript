interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smarWatch: T;
  bike?: X;
}

// type BrandCharaWatch = {
//   heartRate: string;
//   stopwatch: boolean;
// };

// Or

interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callsupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

const poorDeveloper: Developer<
  BrandCharaWatch,
  {
    brand: string;
    engineCapacity: string;
  }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2025",
  },
  smarWatch: {
    heartRate: "180",
    stopwatch: true,
  },
  bike: {
    brand: "Yamaha",
    engineCapacity: "200cc"
  }
};

const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 20,
  device: {
    brand: "hp",
    model: "X34",
    releasedYear: "2050",
  },
  smarWatch: {
    heartRate: "190",
    callsupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};
