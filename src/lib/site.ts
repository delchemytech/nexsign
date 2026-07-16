import { StaticImageData } from "next/image";
import exteriorImg from "@/assets/service-exterior.jpg";
import interiorImg from "@/assets/service-interior.jpg";
import pylonImg from "@/assets/service-pylon.jpg";
import vehicleImg from "@/assets/service-vehicle.jpg";
import hoardingImg from "@/assets/service-hoarding.jpg";
import etchingImg from "@/assets/service-etching.jpg";
import trafficImg from "@/assets/service-traffic.jpg";
import safetyImg from "@/assets/service-safety.jpg";

export const site = {
  name: "neXsign",
  tagline: "Signage & Metal Work",
  city: "Abu Dhabi",
  since: 2004,
  email: "info@nexsign.ae",
  phones: ["+971 50 761 3383", "+971 2 555 8890"],
  whatsapp: "971507613383",
  address: {
    line1: "Mussafah 37",
    line2: "Mussafah Industrial Area",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
  },
  stats: [
    { value: "20+", label: "Years in business" },
    { value: "1,254", label: "Clients served" },
    { value: "2,168", label: "Projects delivered" },
    { value: "100%", label: "Quality commitment" },
  ],
};

export const whatsappUrl = (message = "Hi neXsign, I'd like a quote for a signage project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string | StaticImageData;
  intro: string;
  body: string[];
  applications: string[];
};

export const getImgSrc = (image: string | StaticImageData): string => {
  return typeof image === "string" ? image : image.src;
};

export const services: Service[] = [
  {
    slug: "exterior-signage",
    title: "Exterior Signage",
    short:
      "Illuminated 3D letters, light boxes, fascia and façade signage built to withstand UAE weather.",
    image: exteriorImg,
    intro:
      "Effective exterior signage is often the difference between being seen and being missed. We engineer sign systems that make your location a landmark.",
    body: [
      "From illuminated fascia signs with Neon or LED, flex-face light boxes, and 3-dimensional built-up letters, to cut-out logos, panel systems and post-mounted signage — we deliver a full range of exterior signage solutions.",
      "Every exterior sign is manufactured with UV-resistant, weather-tested materials and, where required, vandal-proof construction. We handle site survey, structural fixings, and installation across Abu Dhabi, Dubai, Sharjah and the Northern Emirates.",
    ],
    applications: [
      "Building-mounted fascia and channel-letter signs",
      "Flex-face and acrylic light boxes",
      "3D built-up illuminated letters (front-lit, back-lit, halo)",
      "ACP cladding and monument branding",
      "Retail storefront signage",
    ],
  },
  {
    slug: "interior-signage",
    title: "Interior Signage",
    short:
      "Reception marks, wayfinding, floor graphics and functional interior signage that shape brand experience.",
    image: interiorImg,
    intro:
      "Well-crafted interior signage sets the tone the moment a customer walks in. We produce interior systems that are both statement pieces and quietly functional.",
    body: [
      "Our interior work covers reception brand marks, display and hanging systems, promotional stands, innovative floor graphics, meeting-room and directional signage, and full health & safety compliance signage.",
      "We match materials — brushed metal, acrylic, timber, powder-coated steel — to the architecture, and finish each piece to a standard that matches the space it lives in.",
    ],
    applications: [
      "Reception and wall-mounted logo signs",
      "Wayfinding and directional systems",
      "Floor and wall graphics",
      "Meeting-room, door and desk signage",
      "Health & safety and statutory signs",
    ],
  },
  {
    slug: "pylon-signs",
    title: "Pylon Signs",
    short:
      "Free-standing pylon and monument signs designed for high visibility and low maintenance.",
    image: pylonImg,
    intro:
      "Pylon signage gives your business advance notice on the road. Often the first impression a customer has, it's a high-impact, low-maintenance investment.",
    body: [
      "We design pylon signs in every scale — from single-tenant monument signs to multi-tenant retail pylons — and guide you through the right shape, illumination and structural approach for your site.",
      "Every pylon we build is engineered for wind loads, UAE weather and long service life, with serviceable illumination systems that stay bright over time.",
    ],
    applications: [
      "Single and multi-tenant retail pylons",
      "Monument and entry signs",
      "Petrol station and F&B pylons",
      "Illuminated and non-illuminated variants",
      "Digital price and menu integrations",
    ],
  },
  {
    slug: "vehicle-graphics",
    title: "Vehicle Graphics",
    short:
      "Full and partial vehicle wraps, cut vinyl and fleet branding for a rolling advertisement.",
    image: vehicleImg,
    intro:
      "Vehicle branding is one of the most cost-effective ways to put your name in front of thousands of potential customers every day.",
    body: [
      "We design and produce high-quality vehicle graphics using two main approaches: cut coloured vinyl for crisp logo and text work, and full-print laminated wraps for image-rich fleet branding.",
      "Every job is planned around your budget, the vehicle geometry and how long the graphics need to last — we install in-house and stand behind the finish.",
    ],
    applications: [
      "Full and partial vehicle wraps",
      "Cut vinyl logos and lettering",
      "Fleet branding programs",
      "Reflective and safety marking",
      "Removal and re-branding",
    ],
  },
  {
    slug: "hoarding-and-banners",
    title: "Hoarding & Banners",
    short: "Large-format hoarding, banners and site branding to build presence at scale.",
    image: hoardingImg,
    intro:
      "Construction hoarding and large-format banners give you an outsized presence quickly — ideal for building reputation and driving short-term action.",
    body: [
      "We produce printed hoarding panels, mesh and PVC banners, flags, and event branding at any scale, and coordinate installation with your site or event team.",
      "Choose between short-run event graphics and long-life construction hoarding — we specify the right substrate and finish for each use.",
    ],
    applications: [
      "Construction site hoarding",
      "Retail and event banners",
      "Roll-ups, flags and pull-up stands",
      "Mesh banners for façades and scaffolding",
      "Launch and campaign branding",
    ],
  },
  {
    slug: "etching-and-engraving",
    title: "Etching & Engraving",
    short: "Laser-engraved nameplates, plaques and industrial tags in metal, acrylic and plastics.",
    image: etchingImg,
    intro:
      "We manufacture nameplates, memorial plaques, badges and industrial identification tags using modern large-format laser engraving and CAD/CAM tooling.",
    body: [
      "Our engraving work supports office, hotel and restaurant signage, plus labels, control panels, fascias and valve tags in brass, aluminium, stainless steel, acrylic, traffolite and more.",
      "We serve the electrical, mechanical, HVAC and electronic industrial sectors across the UAE with a fast, precise service.",
    ],
    applications: [
      "Corporate and office nameplates",
      "Memorial and dedication plaques",
      "Control panel and equipment labels",
      "Valve and pipeline tags",
      "Custom awards and badges",
    ],
  },
  {
    slug: "traffic-signs",
    title: "Traffic Signs",
    short: "Permanent and temporary road signage manufactured to UAE and international standards.",
    image: trafficImg,
    intro:
      "We manufacture all kinds of road and traffic signs — permanent or temporary — in compliance with UAE standards and using 3M reflective sheeting.",
    body: [
      "Permanent signs are produced on aluminium sheet or plank with Diamond Grade, High Intensity Prismatic or Engineering Grade reflective sheeting, depending on the application.",
      "Temporary signs use marine plywood with Engineering Grade or HIP sheeting, engineered to last 2–3 years in typical site conditions.",
    ],
    applications: [
      "Permanent aluminium road signs",
      "Temporary site and diversion signs",
      "Reflective and regulatory signage",
      "Parking, loading and directional signs",
      "Municipality and contractor supply",
    ],
  },
  {
    slug: "safety-signs",
    title: "Safety Signs",
    short:
      "ISO 3864-compliant safety, warning and mandatory signs for industrial and public spaces.",
    image: safetyImg,
    intro:
      "Safety signs inform, instruct and warn — and they must speak a universal visual language. We manufacture safety signage to ISO 3864 standards for use across industrial and public spaces.",
    body: [
      "Our safety signs use the correct colours, shapes and pictograms mandated by international standards so your workplace stays compliant and easy to navigate.",
      "We produce a full catalogue of prohibition, warning, mandatory, emergency and fire-safety signs, plus custom variants where site-specific messaging is required.",
    ],
    applications: [
      "Prohibition and warning signs",
      "Mandatory and PPE signs",
      "Emergency escape and first aid",
      "Fire equipment identification",
      "Hazardous material labelling",
    ],
  },
];

export const clients: { group: string; names: string[] }[] = [
  {
    group: "Government & Semi-Government",
    names: [
      "ADNOC",
      "Presidential Guard",
      "Ministry of Presidential Affairs",
      "Department of Finance",
      "Musanada",
      "Abu Dhabi Ports",
      "Etimad",
    ],
  },
  {
    group: "Healthcare",
    names: ["Cleveland Clinic", "Burjeel Hospital", "Ahalia Hospital", "Lifecare Hospital"],
  },
  {
    group: "Education",
    names: [
      "Abu Dhabi University",
      "Al Ain University",
      "Higher Colleges of Technology",
      "Aldar Academies",
      "Global Indian International School",
      "CBS Creative British School",
    ],
  },
  {
    group: "Retail, Hospitality & Real Estate",
    names: [
      "LuLu Hypermarket",
      "MERAAS",
      "MATALAN",
      "Coop",
      "Emirates Palace",
      "Landmark Leisure",
      "Manazel",
      "Reportage Properties",
      "The Kanoo Group",
      "Popeyes",
    ],
  },
  {
    group: "Automotive & Industrial",
    names: [
      "Audi",
      "Porsche",
      "Ali & Sons",
      "Al Masaood",
      "Alfahim",
      "Borouge",
      "DP World",
      "Jotun",
      "Darwish Bin Ahmed & Sons",
      "EuroMechanical",
    ],
  },
  {
    group: "Financial Services",
    names: ["LuLu International Exchange", "Al Ansari Exchange", "Al Falah Exchange"],
  },
];
