import { useEffect, useState } from "react"

function usecurr(currency) {
    let[data,setData] =useState({})
         useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((res)=>res.json())  //convert the data string to json
         .then((res)=>setData(res[currency])) //access the data
         console.log(data);
    },[currency])
    return data
}
export default usecurr 

