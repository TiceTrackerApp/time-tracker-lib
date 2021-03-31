export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

type FieldError = {
  __typename?: "FieldError" | undefined;
  field: Scalars["String"];
  message: Scalars["String"];
};

const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};

  errors.forEach(({ field, message }) => {
    errorMap[field] = message;
  });

  return errorMap;
};

export default toErrorMap;
