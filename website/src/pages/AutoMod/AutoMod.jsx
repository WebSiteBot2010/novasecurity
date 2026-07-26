import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SettingRow from "../../components/SettingRow/SettingRow";


export default function AutoMod(){


return (

<div>

<h1 className="text-5xl font-black">
AutoMod
</h1>


<DashboardCard
title="Discord AutoMod"
description="Automatic moderation protection"
>


<SettingRow
title="Spam Detection"
description="Block spam messages"
/>


<SettingRow
title="Mention Spam"
description="Prevent mass mentions"
/>


<SettingRow
title="Bad Words"
description="Keyword filtering"
/>


</DashboardCard>


</div>

)

}