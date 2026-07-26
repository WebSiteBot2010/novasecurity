import Toggle from "../Toggle/Toggle";


export default function SettingRow({
title,
description
}){


return (

<div
className="
flex
items-center
justify-between
py-4
border-b
border-white/10
"
>


<div>

<h3
className="
font-semibold
"
>
{title}
</h3>


<p
className="
text-sm
text-gray-400
"
>
{description}
</p>

</div>


<Toggle/>


</div>

)

}