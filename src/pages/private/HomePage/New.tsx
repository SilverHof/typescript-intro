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
   const [value, setValue] = useState<string>("");
   const [userType, setUserType] = useState<string>("userBase");

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

   const handleUserSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setUserType(event.target.value);
      if (userType === "userBase") {
         setUser({
            ...user,
            privileges: {
               create: true,
               read: true,
               update: false,
               delete: false,
            },
         });
      } else if (userType === "userPro") {
         setUser({
            ...user,
            privileges: {
               create: true,
               read: true,
               update: true,
               delete: true,
            },
         });
      }
   };


   return (
      <section className="section">
         <div className="container">
            <div className="inner pt-20 flex flex-col gap-4">
               <form className="flex flex-col items-center gap-4">
                  <select onChange={handleUserSelectChange}>
                     <option value="userBase">User Base</option>
                     <option value="userPro">User Pro</option>
                  </select>
               </form>
            </div>
         </div>
      </section>
   );
};
