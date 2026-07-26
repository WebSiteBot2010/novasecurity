import DashboardCard from "../../components/DashboardCard/DashboardCard";

import useGuildStats from "../../hooks/useGuildStats";


export default function General(){


const guildId="SERVER_ID";


const {
stats,
loading
}=useGuildStats(guildId);



if(loading){

return (

<div className="
text-3xl
font-bold
">

Loading server data...

</div>

)

}



return (

<div>


<h1 className="
text-5xl
font-black
">

General

</h1>


<p className="
text-gray-400
mt-3
">

Live server information

</p>



<div className="
grid
md:grid-cols-4
gap-6
mt-10
">



<DashboardCard
title="Server"
>

{stats?.name || "Unknown"}

</DashboardCard>




<DashboardCard
title="Members"
>

{stats?.members?.toLocaleString() || 0}

</DashboardCard>




<DashboardCard
title="Channels"
>

{stats?.channels || 0}

</DashboardCard>




<DashboardCard
title="Roles"
>

{stats?.roles || 0}

</DashboardCard>




</div>


</div>

)

}