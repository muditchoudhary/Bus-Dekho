import redBus from "../assets/bus-images/red-bus.jpg";
import greenBus from "../assets/bus-images/green-bus.jpg";
import pinkBus from "../assets/bus-images/pink-bus.jpg";

const busData = {
  bus_34: {
    busNum: "34",
    location: [
      "jda_colony",
      "aannda_mangalam_city",
      "ramdhar_mod",
      "badi_chopar",
      "sanganeri_gate",
      "ajmeri_gate",
      "rambhag",
      "tonk_phatak",
      "gopalpura",
    ],
    frequency: "30 min",
    img: pinkBus,
    uniqueKey: 1,
  },
  bus_30: {
    busNum: "30",
    location: [
      "badi_chopad",
      "ramgadh",
      "sobhash_chok",
      "ramgadh_mode",
      "nai_ki_thadi",
      "lali",
    ],
    frequency: "35 min",
    img: pinkBus,
    uniqueKey: 2,
  },
  bus_32: {
    busNum: "32",
    location: [
      "Kamla_nehru_nagar",
      "nayla",
      "gaj_singh_pura",
      "kisan_dharm_kanta",
      "gurjar_ki_thadi",
      "triveni_nagar",
      "gopalpura",
      "rambhag",
      "narayan_singh_circle",
      "kanota",
    ],
    frequency: "44 min",
    img: greenBus,
    uniqueKey: 3,
  },
  bus_11: {
    busNum: "11",
    location: [
      "ajmeri_gate",
      "goner",
      "durgapura",
      "sanganer_thana",
      "pratap_nagar",
      "haldighati",
      "india_gate",
      "goner",
    ],
    frequency: "45 min",
    img: pinkBus,
    uniqueKey: 4,
  },
  bus_6A: {
    busNum: "6A",
    location: [
      "khirni_phatak",
      "airport",
      "jhotwara",
      "chomu_pulia",
      "collectry",
      "ajmeri_gate",
      "tonk_phatak",
      "malviya_nagar",
      "airport",
    ],
    frequency: "48 min",
    img: pinkBus,
    uniqueKey: 5,
  },
  bus_27: {
    busNum: "27",
    location: [
      "goner",
      "vatika",
      "luniyawas",
      "tp_nagar",
      "ghatgate",
      "ajmeri_gate",
      "tonk_phatak",
      "durgapura",
      "sanganer_thana",
      "pratap_nagar",
      "india_gate",
      "12 meel",
      "ashawala,bhatawala",
    ],
    frequency: "1 hr",
    img: greenBus,
    uniqueKey: 6,
  },
  bus_25A: {
    busNum: "25A",
    location: ["ajmeri_gate", "bada_padampura"],
    frequency: "3 hr",
    img: pinkBus,
    uniqueKey: 7,
  },
  bus_25B: {
    busNum: "25B",
    location: ["ajmeri_gate", "titriya"],
    frequency: "3 hr",
    img: pinkBus,
    uniqueKey: 8,
  },

  bus_AC7: {
    busNum: "AC7",
    location: [
      "chomu_pulia",
      "dantli_phatak",
      "railway_station",
      "gpo",
      "ajmeri_gate",
      "gandhi_nagar_mode",
      "rambhag",
      "jhalana",
      "jagatpura",
    ],
    frequency: "22_min",
    img: redBus,
    uniqueKey: 9,
  },

  bus_1: {
    busNum: "1",
    location: [
      "bheru_khejda",
      "galta",
      "vai_harmuda",
      "chomu_pulia",
      "pittal_factory",
      "chandpoul",
      "choti_chopar",
    ],
    frequency: "23_min",
    img: greenBus,
    uniqueKey: 10,
  },

  bus_26: {
    busNum: "26",
    location: [
      "chandpoul",
      "bagru",
      "sodala",
      "purani_chungi",
      "dcm",
      "heerapura",
      "bhankrota",
      "bad_ke_balaji",
      "dahmi_kala",
      "sanjhariya",
    ],
    frequency: "23_min",
    img: greenBus,
    uniqueKey: 11,
  },

  bus_AC1: {
    busNum: "AC1",
    location: [
      "sanganer",
      "kukas",
      "sanganer_police_station",
      "tonk_phatak",
      "rambagh",
      "ajmeri_gate",
      "sanganeri_gate",
      "badi_chopar",
      "ramgarh_mode",
      "jal_mahal",
      "amber_fort",
    ],
    frequency: "24_min",
    img: redBus,
    uniqueKey: 12,
  },

  bus_AC8: {
    busNum: "AC8",
    location: [
      "choti_chopad",
      "mundiya_ramsar",
      "chandpoul",
      "railway_station",
      "hasanpura",
      "khatipura",
      "bindayaka",
    ],
    frequency: "28_min",
    img: redBus,
    uniqueKey: 13,
  },

  bus_1A: {
    busNum: "1A",
    location: [
      "vki",
      "transport_nagar",
      "chomu_pulia",
      "amba_badi",
      "pani_pej",
      "pittal_factory",
      "chandpoul",
      "ajmeri_gate",
    ],
    frequency: "28_min",
    img: greenBus,
    uniqueKey: 14,
  },

  bus_15: {
    busNum: "15",
    location: [
      "chandpoul",
      "chomu",
      "chomu_pulia",
      "khaitan",
      "road_no_14",
      "rampura",
      "jetpura",
    ],
    frequency: "30_min",
    img: pinkBus,
    uniqueKey: 15,
  },

  bus_24: {
    busNum: "24",
    location: [
      "chandpoul",
      "kalwad",
      "pani_pech",
      "chomupulia",
      "jhotwara",
      "hathoes",
    ],
    frequency: "30_min",
    img: greenBus,
    uniqueKey: 16,
  },
  bus_3A: {
    busNum: "3A",
    location: [
      "sanganer",
      "choti_chopad",
      "sanganer_police_station",
      "durgapura",
      "gopalpura",
      "tonk_phatak",
      "rambagh",
      "ajmeri_gate",
    ],
    frequency: "9_min",
    img: pinkBus,
    uniqueKey: 17,
  },

  bus_9A: {
    busNum: "9A",
    location: [
      "dadi_ka_phatak",
      "agrawal_farm",
      "vijay_path",
      "shipra_path",
      "maharani_farm",
      "durgapura",
      "tonk_phatak",
      "rambagh",
      "ajmeri_gate",
      "sanganeri_gate",
      "badi_chopad",
      "chandpole",
      "pittal_factory",
      "shastri_nagar",
      "vidhyadhar_nagar",
      "alka_cinema",
      "rode_no_1",
      "murlipura",
    ],
    frequency: "12_min",
    img: greenBus,
    uniqueKey: 18,
  },

  bus_7: {
    busNum: "7",
    location: [
      "transport_nagar",
      "khirni_phatak",
      "hirapura",
      "gaj_singhpura",
      "kisan_dham_kanta",
      "gujjar_ki_thadi",
      "treveni_nagar",
      "gopalpura",
      "tonk_phatak",
      "rambagh",
      "narayan_singh_circle",
      "badi_chopad",
      "moti_doongri",
      "govind_marg",
      "mentle_hospital",
    ],
    frequency: "12_min",
    img: greenBus,
    uniqueKey: 19,
  },

  bus_3: {
    busNum: "3",
    location: [
      "dwarikapuri",
      "tranaport_nagar",
      "sanganer_police_station",
      "durgapura",
      "gopalpura",
      "tonk_phatak",
      "rambagh",
      "ajmeri_gate",
    ],
    frequency: "13_min",
    img: pinkBus,
    uniqueKey: 20,
  },
  bus_AC2: {
    busNum: "AC2",
    location: [
      "mahatma_gandhi",
      "joshi_marg",
      "jhotwara",
      "chomu_puliya",
      "panipej",
      "railway_station",
      "chandpaul",
      "badi_chopad",
      "rambagh",
      "tonk_phatak",
      "durgapura",
      "sanganer_police_station",
      "pratap_nagar",
      "sitapura",
    ],
    frequency: "15_min",
    img: redBus,
    uniqueKey: 21,
  },
  bus_16: {
    busNum: "16",
    location: [
      "ajmeri_gate",
      "chaksu",
      "sanganer_police_station",
      "pratap_nagar",
      "sitapura",
      "12_meel",
      "bilwa",
      "shivdaspura",
    ],
    frequency: "15_min",
    img: greenBus,
    uniqueKey: 22,
  },
  bus_28: {
    busNum: "28",
    location: [
      "ajmeri_gate",
      "renwal",
      ,
      "rambagh",
      "tonk_phatak",
      "gopalpura",
      "durgapura",
      "sanganer_thana",
      "malpura_gate",
      "muhana",
      "balawala",
    ],
    frequency: "18_min",
    img: redBus,
    uniqueKey: 23,
  },
  bus_14: {
    busNum: "14",
    location: [
      "chomu_puluiya",
      "bassi",
      "jhotwara",
      "vaishali_nagar",
      "sodala",
      "rambagh",
      "ajmeri_gate",
      "transport_nagar",
    ],
    frequency: "20_min",
    img: greenBus,
    uniqueKey: 24,
  },
};

export default busData;
