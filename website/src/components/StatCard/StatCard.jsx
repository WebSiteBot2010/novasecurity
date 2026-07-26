export default function StatCard({
number,
label
}){


return (

<div
className="
text-center
"
>


<h2
className="
text-5xl
font-black
bg-gradient-to-r
from-blue-400
to-purple-500
text-transparent
bg-clip-text
"
>

{number}

</h2>


<p
className="
mt-2
text-gray-400
"
>

{label}

</p>


</div>

)

}