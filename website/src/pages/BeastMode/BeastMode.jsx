import DashboardCard from "../../components/DashboardCard/DashboardCard";


export default function BeastMode(){

return (

<div>

<h1 className="text-5xl font-black">
Beast Mode
</h1>


<DashboardCard
title="Maximum Protection"
description="Enable aggressive security"
>


<button
className="
px-8
py-4
rounded-xl
bg-red-600
font-bold
"
>
Enable Beast Mode
</button>


</DashboardCard>


</div>

)

}