import {
FaServer,
FaShieldAlt,
FaUsers,
FaBolt
} from "react-icons/fa";


export default function Dashboard(){


const servers=[

{
name:"N.O.V.A Community",
members:"12,450",
premium:true
},

{
name:"Gaming Italia",
members:"5,230",
premium:false
},

{
name:"Developer Hub",
members:"8,900",
premium:true
}

];



return (

<div>


<h1 className="
text-5xl
font-black
">

Dashboard

</h1>


<p className="
mt-3
text-gray-400
">

Select a Discord server to manage.

</p>




<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


<div className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
"
>

<FaServer
size={35}
/>


<h2 className="
text-3xl
font-bold
mt-5
">

3

</h2>


<p className="text-gray-400">
Servers
</p>

</div>




<div className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
"
>

<FaShieldAlt
size={35}
/>


<h2 className="
text-3xl
font-bold
mt-5
">

99.9%

</h2>


<p className="text-gray-400">
Protection
</p>

</div>




<div className="
p-6
rounded-3xl
bg-white/5
border
border-white/10
"
>

<FaBolt
size={35}
/>


<h2 className="
text-3xl
font-bold
mt-5
">

ONLINE

</h2>


<p className="text-gray-400">
Bot Status
</p>

</div>


</div>





<h2 className="
text-3xl
font-bold
mt-16
">

Your Servers

</h2>




<div className="
grid
md:grid-cols-3
gap-6
mt-6
">


{

servers.map((server,index)=>(


<div
key={index}
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


<h3 className="
text-2xl
font-bold
">

{server.name}

</h3>


<p className="
text-gray-400
mt-3
">

<FaUsers className="inline"/>

{" "}

{server.members}

</p>



{

server.premium &&

<span
className="
inline-block
mt-5
px-4
py-2
rounded-full
bg-yellow-500/20
text-yellow-400
"
>

PREMIUM

</span>

}



<button
className="
block
mt-6
w-full
py-3
rounded-xl
bg-blue-600
font-bold
"
>

Manage

</button>



</div>


))


}


</div>


</div>

)

}