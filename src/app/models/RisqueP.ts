import { SituationD } from "./situation-D";

// classe représentant une situation dangereuse
export class RisqueP {
  id !: string;
  label ! : string;
  frequency ! : number;
  gravity ! : number;
  measure ! : string;
  situationId !: string
}
