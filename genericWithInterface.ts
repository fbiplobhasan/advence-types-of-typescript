interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smarWatch: T;
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

const poorDeveloper: Developer<BrandCharaWatch> = {
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
};
