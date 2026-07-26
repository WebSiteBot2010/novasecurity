import { Outlet, useParams, useNavigate } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";

import {
    FaDiscord,
    FaSignOutAlt,
    FaServer
} from "react-icons/fa";



export default function DashboardLayout(){


const {
    guildId
}=useParams();


const navigate = useNavigate();



return (

<div
className="
min-h-screen
bg-neutral-950
text-white
"
>



{/* SIDEBAR */}

<DashboardSidebar />





{/* MAIN AREA */}

<div
className="
ml-72
min-h-screen
"
>



{/* TOPBAR */}

<header
className="
h-20
border-b
border-white/10
bg-black/30
backdrop-blur-xl
flex
items-center
justify-between
px-8
sticky
top-0
z-40
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
p-3
rounded-xl
bg-blue-600
"
>

<FaServer/>

</div>



<div>


<h2
className="
font-bold
text-lg
"
>

Server Management

</h2>


<p
className="
text-sm
text-gray-400
"
>

Guild ID: {guildId || "None"}

</p>


</div>


</div>





<div
className="
flex
items-center
gap-5
"
>



<div
className="
flex
items-center
gap-3
px-4
py-2
rounded-xl
bg-white/5
border
border-white/10
"
>


<div
className="
w-8
h-8
rounded-full
bg-indigo-600
flex
items-center
justify-center
"
>

<FaDiscord/>

</div>


<div>

<p
className="
text-sm
font-semibold
"
>

Discord User

</p>


<p
className="
text-xs
text-gray-400
"
>

Connected

</p>


</div>


</div>




<button

onClick={()=>navigate("/login")}

className="
flex
items-center
gap-2
px-4
py-2
rounded-xl
bg-red-600/20
text-red-400
hover:bg-red-600
hover:text-white
transition
"

>

<FaSignOutAlt/>

Logout

</button>




</div>



</header>





{/* PAGE CONTENT */}


<main
className="
p-8
"
>

<Outlet/>

</main>



</div>



</div>

)

}