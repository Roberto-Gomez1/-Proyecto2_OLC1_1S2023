export enum Type{
  INT = 0,
  DOUBLE = 1,
  BOOLEAN = 2,
  CHAR = 3,
  STRING = 4,
  NULL = 5,
  RETURN = 6,
  BREAK =7,
  CONTINUE = 8,
  ARRAY = 9,
  VECTOR = 10,
  VOID = 11,
}


export type Return = {
  value: any,
  type: Type
}

export type ReturnVector = {
  value: any,
  type: Type,
  dimensiones: Array<number>
}