const medicalResources: MedicalResource[] = [
  {
    name: "#Oxygen #Patna #OxygenCylinder #Verified",
    imageUrl: "/images/oxygen.jpg",
    displayName: "#Oxygen",
  },
  {
    name: "#Patna #Ventilator #BedsAvailable",
    imageUrl: "/images/ventilator.jpg",
    displayName: "#Ventilator",
  },
  {
    name: "#Patna #Ambulance",
    imageUrl: "/images/ambulance.jpg",
    displayName: "#ambulance",
  },
  {
    name: "#Plasma #Patna ",
    imageUrl: "/images/plasma.jpg",
    displayName: "#plasma",
  },
  {
    name: "#Remedesivir #Patna",
    imageUrl: "/images/remedesivir.jpg",
    displayName: "#Remedesivir",
  },
  {
    name: "#Patna #ICUbeds #BedsAvailable",
    imageUrl: "/images/ICU.webp",
    displayName: "#ICU",
  },
  {
    name: "#fabiflu #Patna",
    imageUrl: "/images/fabiflu.jpeg",
    displayName: "#fabiflu",
  },
];

interface MedicalResource {
  name: string;
  imageUrl: string;
  displayName: string;
}

export type { MedicalResource };

export default medicalResources;
