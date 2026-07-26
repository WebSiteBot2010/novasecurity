import DashboardCard from "../../components/DashboardCard/DashboardCard";


export default function Verification(){

return (

<div>

<h1 className="text-5xl font-black">
Verification
</h1>


<DashboardCard
title="Verification System"
>


<div className="space-y-4">


<button className="
p-4
rounded-xl
bg-white/10
w-full
">
Captcha Verification
</button>


<button className="
p-4
rounded-xl
bg-white/10
w-full
">
Button Verification
</button>


</div>


</DashboardCard>


</div>

)

}