import * as validator from 'validator'
export let isEmail=(email:string)=>{
 return validator.default.isEmail(email)
}
