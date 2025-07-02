import bisleri from "../assets/bisleri.png";
import amul from "../assets/amul.png";
import lays from "../assets/lays.png";
import tropicana from "../assets/tropicana.png";
import cocaCola from "../assets/coca_cola.png";
import kitkat from "../assets/kitkat.png";
import parleG from "../assets/parle_g.png";

const products = [
  {
    id: "bisleri",
    name: "Bisleri Bottle",
    image: bisleri,
    ecoScore: 51,
    trustScore: "Moderate",
    summary: "PET plastic bottle. Labeled as recyclable but rarely collected.",
    barcode: "8901234567890",
    insights: [
      "Takes 450+ years to decompose in landfills.",
      "Often ends up in oceans due to poor disposal.",
      "Recyclable only if properly sorted and collected."
    ]
  },
  {
    id: "amul",
    name: "Amul Butter Pack",
    image: amul,
    ecoScore: 39,
    trustScore: "Low",
    summary: "Multi-layer foil. Difficult to recycle.",
    barcode: "8904567890123",
    insights: [
      "Multilayered packaging makes recycling nearly impossible.",
      "Usually ends up in mixed municipal waste.",
      "No clear recycling labeling for consumers."
    ]
  },
  {
    id: "lays",
    name: "Lays Chips Pack",
    image: lays,
    ecoScore: 25,
    trustScore: "Low",
    summary: "Contains metallized plastic. Non-recyclable.",
    barcode: "8907890123456",
    insights: [
      "Shiny packets are made with aluminum-plastic composite.",
      "Highly littered and non-recyclable.",
      "Contributes to microplastic pollution in soil and water."
    ]
  },
  {
    id: "tropicana",
    name: "Tropicana Juice Box",
    image: tropicana,
    ecoScore: 66,
    trustScore: "High",
    summary: "Tetra Pak. Recyclable in select locations.",
    barcode: "8906543210987",
    insights: [
      "Tetra Paks can be recycled but require specialized facilities.",
      "Recycling rates are improving with awareness.",
      "Often more sustainable than plastic bottles."
    ]
  },
  {
    id: "coca_cola",
    name: "Coca‑Cola PET Bottle",
    image: cocaCola,
    ecoScore: 45,
    trustScore: "High",
    summary: "Carbonated soft drink in PET bottle. Widely recyclable but often littered.",
    barcode: "8901234500000",
    insights: [
      "Globally one of the most littered plastic brands.",
      "PET is recyclable but requires sorting.",
      "Caps are often not recycled unless separated."
    ]
  },
  {
    id: "kitkat",
    name: "KitKat Chocolate Pack",
    image: kitkat,
    ecoScore: 30,
    trustScore: "Moderate",
    summary: "Foil + plastic laminate. Packaging difficult to recycle.",
    barcode: "8901234500001",
    insights: [
      "Plastic-foil laminate has no practical recycling route.",
      "Recyclability is often misrepresented on the pack.",
      "Alternative paper packaging trials are ongoing."
    ]
  },
  {
    id: "parle_g",
    name: "Parle‑G Biscuit Pouch",
    image: parleG,
    ecoScore: 20,
    trustScore: "Moderate",
    summary: "Plastic pouch packaging. Not recyclable.",
    barcode: "8901234500002",
    insights: [
      "Single-layer LDPE plastic not accepted in most recyclers.",
      "Pouches often burned or dumped in landfills.",
      "Brands are yet to switch to compostable formats."
    ]
  },
];

export default products;
