import DashboardCard from "../../components/DashboardCard/DashboardCard";


export default function AuditLogs(){


const events=[

"Role Created",
"Channel Deleted",
"Webhook Updated",
"Permission Changed",
"Member Timeout"

];


return (

<div>


<h1 className="text-5xl font-black">
Audit Logs
</h1>


<p className="text-gray-400 mt-3">
Premium server activity tracking.
</p>



<div className="mt-10">


<DashboardCard
title="Audit History"
>


{

events.map((event,index)=>(

<div
key={index}
className="
py-4
border-b
border-white/10
"
>

{event}

</div>

))

}


</DashboardCard>


</div>


</div>

)

}