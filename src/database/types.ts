export interface responseType {
  success: boolean;
  error: any;
  message?: string | null;
}

export type exercicesSelectorsData = {
  category: string;
  exercice: string;
  by: string;
  target: string;
};

export type exercicesSelectorsDataWithResults = exercicesSelectorsData & {
  withResult: boolean;
  date: string;
  result: string;
  difficulty: string;
  resultFormat: string;
};
