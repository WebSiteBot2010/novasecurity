import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";


export default function Navbar(){

return (

<nav
className="
fixed
top-0
left-0
w-full
z-50
bg-black/50
backdrop-blur-xl
border-b
border-white/10
"
>

<div
className="
max-w-7xl
mx-auto
h-20
px-6
flex
items-center
justify-between
"
>


<Link
to="/"
className="
text-3xl
font-black
tracking-widest
"
>

N.O.V.A

</Link>



<div
className="
hidden
md:flex
items-center
gap-8
text-gray-300
"
>


<Link to="/">
Home
</Link>

<Link to="/premium">
Premium
</Link>

<Link to="/setup">
Setup
</Link>

<Link to="/support">
Support
</Link>



<Link
to="/dashboard"
className="
flex
items-center
gap-2
px-5
py-3
rounded-xl
bg-indigo-600
hover:bg-indigo-500
transition
text-white
font-bold
"
>

<FaDiscord/>

Dashboard

</Link>


</div>


</div>

</nav>

)

}