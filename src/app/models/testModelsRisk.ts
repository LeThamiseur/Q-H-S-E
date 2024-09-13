import { TestModels } from "./testModels";


// classe représentant un risk
export class TestModelsRisk {
  // id !: string;
  // label ! : string;
  // description ! : string;

  id !: string;
  nomR !: string;
  frequence !: number;
  gravity !: number;
  preventiveMes !: string;
  SituationD !: TestModels;
}
