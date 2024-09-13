import { FormControl } from "@angular/forms";
import { RisqueP } from "./RisqueP";

// classe représentant une situation dangereuse
export class SituationD {
  id !: string;
  label ! : string;
  description ! : string;
  // risques  : RisqueP [] = []
}

export interface SituationDForm {
  Label :  FormControl<string | null>;
  Description:  FormControl<string | null>;

}
