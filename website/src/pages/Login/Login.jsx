import { FaDiscord } from "react-icons/fa";


export default function Login(){


function loginDiscord(){

window.location.href =
"https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=code&scope=identify%20guilds";

}



return (

<div
className="
min-h-screen
flex
items-center
justify-center
"
>


<div
className="
p-12
rounded-3xl
bg-white/5
border
border-white/10
text-center
"
>


<h1
className="
text-5xl
font-black
"
>

Login

</h1>


<p
className="
text-gray-400
mt-4
"
>

Access your N.O.V.A dashboard

</p>



<button

onClick={loginDiscord}

className="
mt-8
flex
items-center
gap-3
px-8
py-4
rounded-xl
bg-indigo-600
hover:bg-indigo-500
font-bold
"

>


<FaDiscord
size={25}
/>

Login with Discord


</button>


</div>


</div>

)

}