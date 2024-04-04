export interface IQuestionCreated {
  title: string | null;
  description: string | null;
  category: string | null;

  id: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface IQuestion
  extends Omit<IQuestionCreated, "id" | "created_at" | "updated_at"> {}
