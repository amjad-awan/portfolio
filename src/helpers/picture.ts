export const convertToPic=(id:string | undefined)=>{
return `http://localhost:8080/api/v1/photo/get-photo/${id}`
}