interface UserParameter {
   firstName: string;
   lastName: string;
   age: number;
   weight: number;
   height: number;
   footSize: number;
   email: string;
   id: string;
   password: string;
   repeatPassword: string;
   country: string;
   countryShort: string;
   zipCode: string;
   city: string;
   street: string;
}

// ** Partial
type UserParametersPartial = Partial<UserParameter>;

// ** Required
type UserParametersRequired = Required<UserParameter>;

// ** Readonly
type UserParametersReadonly = Readonly<UserParameter>;

// ** Record
type TypeRecord = Record<string, number>;
const recordObj1: TypeRecord = {
   age: 1,
   weight: 12,
   height: 21,
};

type UserIds = 1000 | 1001 | 1002;
type User = {
   name: string;
   password: string;
};

type UserMap = Record<UserIds, User>;
const userMap: UserMap = {
   1000: {
      name: "",
      password: "",
   },
   1001: {
      name: "",
      password: "",
   },
   1002: {
      name: "",
      password: "",
   },
};

// ** Exclude
type Transport = "Car" | "Bus" | "Bike" | "Train";
type WithoutBike = Exclude<Transport, "Bike">;

// ** Pick
type UserPhysical = Pick<UserParameter, "height" | "weight" | "footSize">;

// ** Omit
type UserWithoutPhysical = Omit<
   UserParameter,
   "height" | "weigth" | "footSize"
>;

// ** NonNullable
type Values = string | undefined | null | number[] | null[] | object;
type NonNullableTuple = NonNullable<Values>;

// ** Parameters
function getSomeInfo<T>(start: number, end: number, arr: T) {
   return `Array ${arr} start with ${start} and end with ${end}`;
}

type GetSomeInfoParameters = Parameters<typeof getSomeInfo>;
type GetSomeInfoFirstParameter = Parameters<typeof getSomeInfo>[0];

// ** ReturnType
function returnGenericType1<T>(start: number, end: number, arr: T): T {
   return arr;
}
function returnGenericType2<T>(start: number, end: number, arr: T): number {
   return start;
}
function returnGenericType3<T>(start: number, end: number, arr: T): string {
   return ``;
}
type GetSomeInfoReturnType1 = ReturnType<typeof returnGenericType1>;
type GetSomeInfoReturnType2 = ReturnType<typeof returnGenericType2>;
type GetSomeInfoReturnType3 = ReturnType<typeof returnGenericType3>;
