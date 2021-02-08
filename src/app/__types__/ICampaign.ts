export interface ICampaign {
  id: string,
  name: string,
  bid_ammount: number,
  funds: number[],
  status: boolean,
  keywords: string[],
  town: string,
  radius: number,
}