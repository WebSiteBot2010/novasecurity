import {
    NavLink,
    useParams
} from "react-router-dom";

import {
    FaHome,
    FaShieldAlt,
    FaRobot,
    FaSkull,
    FaBolt,
    FaUserCheck,
    FaBan,
    FaLink,
    FaBug,
    FaClipboardList,
    FaHistory,
    FaDatabase
} from "react-icons/fa";


export default function DashboardSidebar(){


const { guildId } = useParams();



const items = [

{
name:"Overview",
path:"",
icon:<FaHome/>
},

{
name:"General",
path:"general",
icon:<FaShieldAlt/>
},

{
name:"AutoMod",
path:"automod",
icon:<FaRobot/>
},

{
name:"Anti Nuke",
path:"antinuke",
icon:<FaSkull/>
},

{
name:"Beast Mode",
path:"beastmode",
icon:<FaBolt/>
},

{
name:"Anti Raid",
path:"antiraid",
icon:<FaShieldAlt/>
},


{
name:"Verification",
path:"verification",
icon:<FaUserCheck/>
},


{
name:"Anti Spam",
path:"antispam",
icon:<FaBan/>
},


{
name:"Anti Link",
path:"antilink",
icon:<FaLink/>
},


{
name:"Anti Phishing",
path:"antiphishing",
icon:<FaBug/>
},


{
name:"Bot Logs",
path:"botlogs",
icon:<FaClipboardList/>
},


{
name:"Audit Logs",
path:"auditlogs",
icon:<FaHistory/>
},


{
name:"Backup",
path:"backup",
icon:<FaDatabase/>
}


];



return (

<aside
className="
w-72
min-h-screen
fixed
left-0
top-0
bg-black/40
backdrop-blur-xl
border-r
border-white/10
p-6
"
>


<div
className="
mb-10
"
>

<h1
className="
text-3xl
font-black
tracking-widest
"
>

N.O.V.A

</h1>


<p
className="
text-sm
text-gray-400
mt-2
"
>

Security Dashboard

</p>


</div>



<nav
className="
space-y-2
"
>


{

items.map((item)=>(


<NavLink

key={item.path}

to={
item.path
?
`/dashboard/${guildId}/${item.path}`
:
`/dashboard/${guildId}`
}

className={({isActive})=>

`

flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive
?
"bg-blue-600 text-white"
:
"text-gray-400 hover:bg-white/10 hover:text-white"
}

`

}


>

<span>
{item.icon}
</span>


<span>
{item.name}
</span>


</NavLink>


))

}


</nav>



</aside>

)

}