import DashboardCard from "../../components/DashboardCard/DashboardCard";


export default function BotLogs(){

const logs=[

"User banned",
"Anti Nuke triggered",
"Verification completed",
"Backup created",
"Configuration updated"

];


return (

<div>

<h1 className="text-5xl font-black">
Bot Logs
</h1>


<DashboardCard
title="Recent Events"
description="Latest N.O.V.A activity"
>


<div className="space-y-3">


{
logs.map((log,index)=>(

<div
key={index}
className="
p-4
rounded-xl
bg-white/5
border
border-white/10
"
>

{log}

</div>

))
}


</div>


</DashboardCard>


</div>

)

}