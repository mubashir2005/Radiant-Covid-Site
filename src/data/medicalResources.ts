const medicalResources: MedicalResource[] = [
  {
    name: "#Oxygen #Patna",
    imageUrl: "/images/oxygen.jpg",
    displayName: "#Oxygen",
  },
  {
    name: "#Ventilator #Patna",
    imageUrl: "/images/ventilator.jpg",
    displayName: "#Ventilator",
  },
  {
    name: "#Patna #Ambulance",
    imageUrl: "/images/ambulance.jpg",
    displayName: "#ambulance",
  },
  {
    name: "#Remedesivir #Patna",
    imageUrl: "/images/remedesivir.jpg",
    displayName: "#Remedesivir",
  },
  {
    name: "#Patna #ICUbed",
    imageUrl: "/images/ICU.webp",
    displayName: "#ICU",
  },
  {
    name: "#covidhospital #Patna",
    imageUrl: "/images/hospital.jpg",
    displayName: "#covidhospital",
  },
];

interface MedicalResource {
  name: string;
  imageUrl: string;
  displayName: string;
}

export type { MedicalResource };

export default medicalResources;
