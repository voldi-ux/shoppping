export const  getMappedData = data => {
    
 const mappedData = data.map(collection => {
   
     return {
         routename:encodeURI(collection.title.toLowerCase()),
         id:collection._id,
         title:collection.title,
         items:collection.items
     }
 }) 
  const newMappedData = mappedData.reduce((acc,collection )=>{
    acc[collection.title.toLowerCase()] = collection;
    
    return acc
},{})
return newMappedData
} 