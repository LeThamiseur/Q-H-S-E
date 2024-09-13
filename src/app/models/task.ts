import { FormControl } from "@angular/forms";

export class Task {
  id!: string;
  name!: string;
  workUnitId! : string;
}

export interface TaskForm {
  name:FormControl<string | null>;
  workUnitId: FormControl<string | null>;
}
