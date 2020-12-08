import $http from '@u/http';
export const getDoctorList = () =>{
   return  $http.get("/api/dx/getDoctorList")
}