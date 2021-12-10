export interface ICourseCatalog {
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
  sponser: string;  
}
