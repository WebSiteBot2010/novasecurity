import DashboardCard from "../../components/DashboardCard/DashboardCard";


export default function Backup(){


return (

<div>


<h1 className="text-5xl font-black">
Backup System
</h1>


<p className="text-gray-400 mt-3">
Create and restore your Discord server backups.
</p>



<div className="
mt-10
grid
md:grid-cols-3
gap-6
">


<DashboardCard
title="Create Backup"
>


<button
className="
w-full
py-4
rounded-xl
bg-blue-600
font-bold
"
>

Create

</button>


</DashboardCard>



<DashboardCard
title="Restore"
>


<button
className="
w-full
py-4
rounded-xl
bg-green-600
font-bold
"
>

Restore

</button>


</DashboardCard>



<DashboardCard
title="Storage"
>


<p>
0 / 10 Backups
</p>


</DashboardCard>


</div>


</div>

)

}