export type CampaignType =
  | "Promotion"
  | "Event Invite"
  | "CTA For Abandoned Cart"
  | "Product Launch"
  | "Newsletter Launch";

export type Tone =
  | "Professional"
  | "Friendly"
  | "Excited"
  | "Urgent"
  | "Humorous";

export interface CampaignTemplate {
  id: string;
  name: string;
  campaignType: CampaignType;
  campaignHook: string;
  tone: Tone;
  callToAction: string;
  extraInformation: string;
}