import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SettingRow from "../../components/SettingRow/SettingRow";


export default function AntiSpam(){

return (

<div>

<h1 className="text-5xl font-black">
Anti Spam
</h1>


<p className="text-gray-400 mt-3">
Advanced spam protection system.
</p>


<div className="mt-10">


<DashboardCard
title="Spam Detection"
description="Prevent message flooding"
>


<SettingRow
title="Message Spam"
description="Detect repeated messages"
/>


<SettingRow
title="Mention Spam"
description="Block mass mentions"
/>


<SettingRow
title="Caps Spam"
description="Prevent excessive caps"
/>


<SettingRow
title="Emoji Spam"
description="Block emoji flooding"
/>


<SettingRow
title="Advertisement Detection"
description="Detect unwanted promotions"
/>


</DashboardCard>


</div>


</div>

)

}