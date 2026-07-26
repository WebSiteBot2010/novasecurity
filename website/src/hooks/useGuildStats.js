import {useEffect, useState} from "react";
import api from "../services/api";


export default function useGuildStats(guildId){


const [stats,setStats] = useState(null);

const [loading,setLoading] = useState(true);



useEffect(()=>{


async function loadStats(){


try{


const response = await api.get(
`/guilds/${guildId}/stats`
);


setStats(response.data);



}catch(error){

console.error(
"Stats error:",
error
);


}


setLoading(false);


}



loadStats();



const interval=setInterval(
loadStats,
10000
);


return ()=>clearInterval(interval);



},[guildId]);



return {
stats,
loading
};


}