import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_Physician from "./General_Physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General Physician",
    image: General_Physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. James specializes in preventive care and managing chronic conditions. His patient-centered approach focuses on building long-term relationships with families. With expertise in diabetes management, cardiovascular health, and geriatric care, he provides comprehensive treatment plans tailored to each patient's unique needs and lifestyle.",
    fees: 50,
    available: true,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Larson is dedicated to women's health and wellness throughout all life stages. She provides comprehensive care from adolescence through menopause with compassion and expertise. Her special interests include minimally invasive surgery, fertility treatments, and hormone management. She is known for her gentle approach and thorough patient education.",
    fees: 60,
    available: true,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Patel combines medical and cosmetic dermatology to help patients achieve healthy, beautiful skin. She stays current with the latest skincare innovations and has particular expertise in treating acne, psoriasis, and skin cancer. Her approach integrates advanced treatments with practical skincare routines for optimal results.",
    fees: 30,
    available: false,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Lee creates a warm, friendly environment for young patients and their families. He emphasizes developmental care and preventive health for children of all ages. With special training in behavioral health and childhood allergies, he provides comprehensive pediatric care from newborn checks to adolescent medicine.",
    fees: 40,
    available: true,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Garcia excels in diagnosing complex neurological conditions with a research background in neurodegenerative diseases. Her expertise includes treating migraines, epilepsy, and multiple sclerosis. She combines traditional neurological treatments with innovative therapeutic approaches to provide comprehensive care for her patients.",
    fees: 50,
    available: true,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Williams specializes in headache disorders and neuromuscular conditions. His holistic approach to neurological health incorporates lifestyle modifications, medication management, and rehabilitation techniques. He has extensive experience in treating stroke patients and conducting neurological research studies.",
    fees: 50,
    available: true,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Davis brings extensive emergency medicine experience to his family practice. He excels in acute care and managing multiple health conditions simultaneously. His background in sports medicine allows him to provide comprehensive care for both athletic injuries and chronic health conditions.",
    fees: 50,
    available: false,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. White focuses on minimally invasive surgical techniques and reproductive health. His expertise includes treating endometriosis, fibroids, and fertility issues. He is known for his patient-centered approach and dedication to using the latest technological advancements in gynecological care.",
    fees: 60,
    available: true,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Mitchell specializes in treating skin cancer and autoimmune skin conditions. Her practice combines medical dermatology with aesthetic procedures. She has particular expertise in laser treatments and chemical peels, while maintaining a strong focus on skin cancer prevention and treatment.",
    fees: 30,
    available: true,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. King has special expertise in pediatric behavioral health and developmental disorders. He partners with families to support children's physical and emotional wellbeing. His approach includes regular developmental screening, nutritional guidance, and collaborative care with other specialists when needed.",
    fees: 40,
    available: true,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Kelly is renowned for her work with stroke patients and neurorehabilitation. She employs innovative therapies and has pioneered several treatment protocols. Her expertise extends to movement disorders and neurodegenerative diseases, with a special focus on early intervention and prevention.",
    fees: 50,
    available: false,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Harris focuses on movement disorders and neurodegenerative conditions. His comprehensive approach combines medication management with lifestyle modifications and physical therapy. He has conducted extensive research in Parkinson's disease and essential tremors, bringing cutting-edge treatments to his patients.",
    fees: 50,
    available: true,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Evans emphasizes preventive care and health education in her practice. She helps patients make informed decisions about their health management through comprehensive consultations. Her expertise includes managing chronic conditions, women's health, and geriatric care with a focus on maintaining quality of life.",
    fees: 50,
    available: true,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Martinez specializes in high-risk pregnancies and fertility treatments. His caring approach helps patients navigate complex reproductive health issues. He has additional training in minimally invasive surgery and advanced obstetric care, ensuring comprehensive treatment for all gynecological conditions.",
    fees: 60,
    available: true,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Hill combines clinical dermatology with aesthetic treatments to provide comprehensive skin care. She specializes in treating complex skin conditions while also offering advanced cosmetic procedures. Her expertise includes acne treatment, anti-aging procedures, and management of chronic skin conditions using both traditional and innovative approaches.",
    fees: 30,
    available: true,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
];
