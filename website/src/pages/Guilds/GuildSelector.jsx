import {
FaServer,
FaUsers,
FaCrown
} from "react-icons/fa";

import {useNavigate} from "react-router-dom";


export default function GuildSelector(){


const navigate = useNavigate();



const servers=[

{
id:"1530828159883415683",
name:"N.O.V.A Community",
members:12450,
owner:true,
premium:true
},


{
id:"987654321",
name:"Gaming Italia",
members:5200,
owner:false,
premium:false
},


{
id:"555555555",
name:"Developer Hub",
members:8500,
owner:true,
premium:true
}


];



return (

<div>


<h1
className="
text-5xl
font-black
"
>

Select a Server

</h1>


<p
className="
mt-3
text-gray-400
"
>

Choose a Discord server where you manage N.O.V.A.

</p>



<div
className="
grid
md:grid-cols-3
gap-6
mt-10
"
>


{

servers.map(server=>(


<div

key={server.id}

className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
hover:border-blue-500
transition
"

>


<div
className="
flex
items-center
gap-4
"
>


<div
className="
p-4
rounded-2xl
bg-indigo-600
"
>

<FaServer/>

</div>


<div>

<h2
className="
text-2xl
font-bold
"
>

{server.name}

</h2>


<p
className="
text-gray-400
"
>

<FaUsers className="inline"/>

{" "}

{server.members}

</p>


</div>


</div>



{

server.premium &&

<div
className="
mt-5
inline-flex
items-center
gap-2
px-4
py-2
rounded-full
bg-yellow-500/20
text-yellow-400
"
>

<FaCrown/>

Premium

</div>

}




<button

onClick={()=>navigate(`/dashboard/${server.id}`)}

className="
mt-8
w-full
py-3
rounded-xl
bg-blue-600
font-bold
hover:bg-blue-500
transition
"

>

Manage Server

</button>



</div>


))

}


</div>


</div>

)

}