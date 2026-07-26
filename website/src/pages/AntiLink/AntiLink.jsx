import DashboardCard from "../../components/DashboardCard/DashboardCard";
import SettingRow from "../../components/SettingRow/SettingRow";


export default function AntiPhishing(){


return (

<div>

<h1 className="text-5xl font-black">
Anti Phishing
</h1>


<p className="text-gray-400 mt-3">
AI powered malicious URL scanner.
</p>



<div className="mt-10">


<DashboardCard
title="Security Engines"
>


<SettingRow
title="VirusTotal"
description="Scan suspicious URLs"
/>


<SettingRow
title="Google Safe Browsing"
description="Threat intelligence"
/>


<SettingRow
title="OpenPhish"
description="Phishing database"
/>


<SettingRow
title="URLHaus"
description="Malware detection"
/>


</DashboardCard>


</div>


</div>

)

}