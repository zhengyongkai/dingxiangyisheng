import $http from '@u/http';
const prodEnv = require('../../../config/prod.env')
const api  =  prodEnv.NODE_ENV == '"production"' ? 'https://fastmock.site/mock/006c006287b8911f6b7585e6ee959cda/dx' : ''
export const getDoctorList = (params) =>{
   return  `${api}/getDoctorList`;
}