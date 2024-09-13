export interface FieldsOnError {
  id: string;
  description: string;
  label: string;
}
 
export interface ResponseFormError {
  fieldsOnError: FieldsOnError[];
  isSuccess: number;
  statusCode: string;
}