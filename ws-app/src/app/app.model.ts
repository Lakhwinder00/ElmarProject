
export interface IRegistration {
    id: string;
    firstName: string;
    lastName: string;
    email: number;
    customerMemberId: string;
}
export interface ICourse {
  id: string;
  type: string;
  name: string;
  displayname: string;
  customerProductId: string;
  uniqueNameId: string;
  price: number;
  ecommerce: boolean;
  IsproductOnly: boolean;
  tag: string;
  userSelfRegistrationLimits: string;
  catalogRegisterButtonStrategy: string;
  instructors: string;
  expiration: string;
  localCountry: string;
  prefer: string;
  creditsvalue: string;
  creditstype: string;
  PrerequistiesName: string;
  PrerequistiesCreated: string;
  avilable: boolean;
  memberType: boolean;
 
}
export interface ITranscript {
  categoryActiveName: string;
  categoryProvidename: string;
  location: string;
  startDate: string;
  completionDate: string;
  creditCardType: string;
  riskHours: number;
  childAbuse: number;
  Opioids: number;
}
export interface IUserAssocLinked {
  id?: number;
  type: string;
  email: string;
  course: string;
  role: string;
}
export interface IUserAssocNotLinked {
  id?: number;
  type: string;
  name: string;
}
export interface ITranscriptRange {
  categoryActiveName: string;
  startDate: string;
  completionDate: string;
  startTime: string;
  completionTime: string;
}
export interface IEmail {
  Events: string;
  Subject: string;
  To: string;
  From: string;
  Sent: string;
}
export interface IInstrcustions {
  instructionsInfo:string
}
export interface ICredits {
  value: string;
  type: string;
}
export interface IPrerequisties {
  name: string;
  created: string;
}
export interface IMemberTypeSettings {
  avilable: boolean;
  name: string;
}

export interface IPrimeMemeberGroup {
    name: string,
    code: string
}

