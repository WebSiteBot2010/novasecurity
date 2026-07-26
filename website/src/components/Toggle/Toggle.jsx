export default function DashboardCard({
    title,
    description,
    children
}){

return (

<div
className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
backdrop-blur-xl
"
>

<h2
className="
text-xl
font-bold
"
>
{title}
</h2>


{
description &&
<p
className="
text-gray-400
mt-2
"
>
{description}
</p>
}


<div
className="
mt-6
"
>

{children}

</div>


</div>

)

}