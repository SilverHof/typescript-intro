type BooleanType = true | false;
type TrueOrFalse<T extends boolean> = T;
type Transort = "Bus" | "Car" | "Train" | "Bike";


interface PrivilegesInterface<
   Create extends BooleanType,
   Read extends BooleanType,
   Update extends BooleanType,
   Delete extends BooleanType
> {
   create: Create;
   read: Read;
   update: Update;
   delete: Delete;
}

interface UserInterface {
   firstName: string;
   lastName: string;
   password: string;
   repeatPassword: string;
   preferTransort?: Transort
} 


export interface UserBasicInterface extends UserInterface {
   privileges: PrivilegesInterface<true, true, false, false>;
}

export interface UserProInterface extends UserInterface {
   privileges: PrivilegesInterface<true, true, true, true>;
}

export const userBasic1: UserBasicInterface = {
   firstName: "Vova",
   lastName: "Tosuniov",
   password: "111",
   repeatPassword: "111",
   preferTransort: "Car",
   privileges: {
      create: true,
      read: true,
      update: false,
      delete: false,
   }  
};

export const userPro1: UserProInterface = {
   firstName: "Vova",
   lastName: "Tosuniov",
   password: "111",
   repeatPassword: "111",
   preferTransort: "Car",
   privileges: {
      create: true,
      read: true,
      update: true,
      delete: true,
   }  
};





