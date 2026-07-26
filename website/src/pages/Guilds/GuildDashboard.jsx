import {
useParams,
Link
} from "react-router-dom";


export default function GuildDashboard(){


const {
guildId
}=useParams();



return (

<div>


<h1
className="
text-5xl
font-black
"
>

Server Management

</h1>


<p
className="
mt-3
text-gray-400
"
>

Managing guild:

<span
className="
text-white
ml-2
"
>

{guildId}

</span>

</p>



<div
className="
grid
md:grid-cols-3
gap-6
mt-10
"
>



<Link

to={`/dashboard/${guildId}/general`}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500
"

>

<h2
className="
text-2xl
font-bold
"
>

Security Settings

</h2>


<p className="text-gray-400 mt-2">

Configure N.O.V.A protection.

</p>


</Link>




<div
className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>

<h2
className="
text-2xl
font-bold
"
>

Bot Status

</h2>


<p className="
text-green-400
mt-3
"
>

● Online

</p>


</div>




<div
className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
"
>

<h2
className="
text-2xl
font-bold
"
>

Protection

</h2>


<p className="
mt-3
"
>

99.9%

</p>


</div>



</div>


</div>

)

}