export interface Club {
  id: number
  name: string
  type: Type | null
  category: null | string
  email: null | string
  website: null | string
  phone: null | string
  logo: null | string
  address: null | string
  mission: string
  benefits: string
  goals: string
  constitution: null | string
  officers: Officer[]
  categories?: Category[]
  categoryParsed?: CategoryParsed
}

export interface Category {
  category: string
  confidence: number
}

export enum CategoryParsed {
  ArtsEntertainment = "Arts & Entertainment",
  BeautyFitness = "Beauty & Fitness",
  BooksLiterature = "Books & Literature",
  BusinessIndustrial = "Business & Industrial",
  ComputersElectronics = "Computers & Electronics",
  Finance = "Finance",
  FoodDrink = "Food & Drink",
  Games = "Games",
  Health = "Health",
  HobbiesLeisure = "Hobbies & Leisure",
  InternetTelecom = "Internet & Telecom",
  JobsEducation = "Jobs & Education",
  LawGovernment = "Law & Government",
  News = "News",
  OnlineCommunities = "Online Communities",
  PeopleSociety = "People & Society",
  PetsAnimals = "Pets & Animals",
  RealEstate = "Real Estate",
  Reference = "Reference",
  Science = "Science",
  SensitiveSubjects = "Sensitive Subjects",
  Sports = "Sports",
  Travel = "Travel",
}

export interface Officer {
  name: string
  email: null | string
}

export enum Type {
  CampusResources = "Campus Resources",
  CenterForLanguageStudyCLS = "Center for Language Study (CLS)",
  GSASStudentOrganizations = "GSAS Student Organizations",
  GraduateHousing = "Graduate Housing",
  GraduateSchoolOfArtsSciencesGSASAdministration = "Graduate School of Arts & Sciences (GSAS) Administration",
  Hospitality = "Hospitality",
  MACMillanCenterForInternationalAndAreaStudies = "MacMillan Center for International and Area Studies",
  OfficeOfInternationalStudentScholarsOISS = "Office of International Student & Scholars (OISS)",
  PoorvuCenterForTeachingAndLearning = "Poorvu Center for Teaching and Learning",
  PostdoctoralAffairs = "Postdoctoral Affairs",
  SchoolOfArchitecture = "School of Architecture",
  SchoolOfDrama = "School of Drama",
  SchoolOfMedicine = "School of Medicine",
  SchoolOfNursing = "School of Nursing",
  SchoolOfPublicHealth = "School of Public Health",
  SchoolOfPublicHealthStudentOrganizations = "School of Public Health Student Organizations",
  SchwarzmanCenter = "Schwarzman Center",
  TheJacksonInstituteForGlobalAffairs = "The Jackson Institute for Global Affairs",
  UniversityLifeAdministration = "University Life Administration",
  UniversityLifeOrganizations = "University Life Organizations",
  YaleAthletics = "Yale Athletics",
  YaleCollegeDeanSOfficeAdministration = "Yale College Dean's Office Administration",
  YaleCollegeResidentialColleges = "Yale College Residential Colleges",
  YaleCollegeUndergraduateOrganizations = "Yale College Undergraduate Organizations",
  YaleCollegeUndergraduateProduction = "Yale College Undergraduate Production",
  YaleConnectCentral = "Yale Connect Central",
  YaleDivinitySchool = "Yale Divinity School",
  YaleLawSchool = "Yale Law School",
  YaleLibrary = "Yale Library",
  YaleSchoolOfMusic = "Yale School of Music",
  YaleSchoolOfTheEnvironment = "Yale School of the Environment",
  YaleSchoolOfTheEnvironmentStudentGroups = "Yale School of the Environment Student Groups",
}
