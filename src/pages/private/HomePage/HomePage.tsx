import React, { useState } from "react";
import { identity } from "../../../functions/identity";
import { Input } from "../../../components/Input/Input";
import {
   UserBasicInterface,
   UserProInterface,
   userBasic1,
   userPro1,
} from "../../../ts/interfaces/UserInterfaces";

export const HomePage: React.FC = () => {
   const [userType, setUserType] = useState<"userBase" | "userPro">("userBase");
   const [user, setUser] = useState<UserBasicInterface | UserProInterface>({
      firstName: "",
      lastName: "",
      password: "",
      repeatPassword: "",
      privileges: {
         create: true,
         read: true,
         update: false,
         delete: false,
      },
   });

   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserType(event.target.value as "userBase" | "userPro");
      if (userType === "userPro") {
         setUser((prev) => ({
            ...prev,
            privileges: {
               create: true,
               read: true,
               update: false,
               delete: false,
            },
         }));
      } else if (userType === "userBase") {
         setUser((prev) => ({
            ...prev,
            privileges: {
               create: true,
               read: true,
               update: true,
               delete: true,
            },
         }));
      }
   };

   const userTuple: [string, number] = ["Isaak", 22];

   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log(user);
   };

   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-20 flex flex-col gap-4">
               <div className="flex flex-col gap-2">
                  <h2 className="text-white">Identity type with Generics</h2>
                  <div className="flex items-center gap-4">
                     <button className="button" onClick={() => identity(12)}>
                        Identity number
                     </button>
                     <button
                        className="button"
                        onClick={() => identity<string>("12")}
                     >
                        Identity string
                     </button>
                     <button
                        className="button"
                        onClick={() => identity<boolean>(true)}
                     >
                        Identity boolean
                     </button>
                     <button
                        className="button"
                        onClick={() => identity<number>([1, 2, 3, 4])}
                     >
                        Identity array object
                     </button>
                  </div>
               </div>
               <form
                  className="flex flex-col items-center gap-4"
                  onSubmit={handleSubmit}
               >
                  <select onChange={handleSelectChange}>
                     <option value="userBase">User Base</option>
                     <option value="userPro">User Pro</option>
                  </select>
                  <Input
                     value={user.firstName}
                     onChange={(event) =>
                        setUser({
                           ...user,
                           firstName: event.target.value,
                        })
                     }
                     placeholder={"First Name"}
                  />
                  <Input
                     value={user.lastName}
                     onChange={(event) =>
                        setUser({
                           ...user,
                           lastName: event.target.value,
                        })
                     }
                     placeholder={"Last Name"}
                  />
                  <Input
                     value={user.password}
                     onChange={(event) =>
                        setUser({
                           ...user,
                           password: event.target.value,
                        })
                     }
                     placeholder={"Password"}
                  />
                  <Input
                     value={user.repeatPassword}
                     onChange={(event) =>
                        setUser({
                           ...user,
                           repeatPassword: event.target.value,
                        })
                     }
                     placeholder={"Repeat Password"}
                  />
                  <button className="button">Submit</button>
               </form>
            </div>
         </div>
      </section>
   );
};
