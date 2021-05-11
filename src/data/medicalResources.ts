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
    name: "#Patna #ambulance",
    imageUrl: "/images/ambulance.jpg",
    displayName: "#ambulance",
  },
  {
    name: "Plasma available Patna",
    imageUrl: "/images/plasma.jpg",
    displayName: "#plasma",
  },
  {
    name: "Remedesivir available Patna",
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
  {
    name: "Oximeter Patna ",
    imageUrl: "/images/oximeter.jpg",
    displayName: "#Oximeter",
  },
];

interface MedicalResource {
  name: string;
  imageUrl: string;
  displayName: string;
}

export type { MedicalResource };

export default medicalResources;
