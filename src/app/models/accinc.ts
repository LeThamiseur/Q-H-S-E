// classe représentant une dotation


import { FormControl } from "@angular/forms";
import { User } from "./user";

export class Accinc {

  id!:string;
  type!:string;
  nature!: string;
  victime !: string;
  measure! : string;
  locationAccident!:string;
  dateAccident!:Date;
  description!:string;
  timeAccident! : string;
  task!:string;
  consequence!:string;
  dommage!:string;
  witness!:string;
  matricule!:string;
  service!:string;
  poste!:string;
  contract!:string;


}

export interface AccIncForm {
  type:FormControl<string | null>;
  nature: FormControl<string | null>;
  victime : FormControl<string | null>;
  measure : FormControl<string | null>;
  locationAccident:FormControl<string | null>;
  dateAccident:FormControl<Date | null>;
  description:FormControl<string | null>;
  timeAccident : FormControl<string | null>;
  task:FormControl<string | null>;
  consequence:FormControl<string | null>;
  dommage:FormControl<string | null>;
  witness:FormControl<string | null>;
  matricule:FormControl<string | null>;
  service:FormControl<string | null>;
  poste:FormControl<string | null>;
  contract:FormControl<string | null>;
}
