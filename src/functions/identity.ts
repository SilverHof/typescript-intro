export const identity = <Type>(arg: Type | Type[]): Type | Type[] => {
   alert(typeof arg);
   
   return arg;
}