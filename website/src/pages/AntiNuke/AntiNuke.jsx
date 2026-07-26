import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SettingRow from "../../components/SettingRow/SettingRow";


export default function AntiNuke(){


return (

<div>

<h1 className="text-5xl font-black">
Anti Nuke
</h1>


<DashboardCard
title="Destructive Action Protection"
>


<SettingRow
title="Mass Ban Protection"
description="Prevent mass bans"
/>


<SettingRow
title="Channel Delete Protection"
description="Protect channels"
/>


<SettingRow
title="Role Delete Protection"
description="Protect roles"
/>


<SettingRow
title="Webhook Protection"
description="Block webhook attacks"
/>


</DashboardCard>


</div>

)

}