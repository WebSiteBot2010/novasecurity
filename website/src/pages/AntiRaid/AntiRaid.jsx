import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SettingRow from "../../components/SettingRow/SettingRow";


export default function AntiRaid(){

return (

<div>

<h1 className="text-5xl font-black">
Anti Raid
</h1>


<DashboardCard
title="Raid Detection"
>


<SettingRow
title="Mass Join Detection"
description="Detect raid waves"
/>


<SettingRow
title="Automatic Lockdown"
description="Lock server during attacks"
/>


</DashboardCard>


</div>

)

}