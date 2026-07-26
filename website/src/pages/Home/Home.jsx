import { motion } from "framer-motion";
import {
ShieldCheck,
Sword,
Bot,
Lock,
Radar,
Database
} from "lucide-react";


import FeatureCard from "../../components/FeatureCard/FeatureCard";
import StatCard from "../../components/StatCard/StatCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";


export default function Home(){


const features=[

{
icon:"🛡️",
title:"Anti Nuke",
description:
"Proteggi il tuo server da distruzioni massive, eliminazioni e attacchi amministrativi."
},


{
icon:"⚡",
title:"Anti Raid",
description:
"Blocca automaticamente raid e ingressi sospetti nella tua community."
},


{
icon:"🔍",
title:"Anti Phishing",
description:
"Scansione intelligente dei link contro scam, malware e phishing."
},


{
icon:"🤖",
title:"AI Security",
description:
"Rilevamento avanzato tramite sistemi intelligenti."
},


{
icon:"📜",
title:"Advanced Logs",
description:
"Controlla ogni azione tramite log completi."
},


{
icon:"💾",
title:"Server Backup",
description:
"Crea backup della tua community e ripristinali quando vuoi."
}

]


return (

<div>


{/* HERO */}

<section
className="
min-h-screen
flex
items-center
justify-center
relative
overflow-hidden
pt-20
"
>


<div
className="
absolute
w-[600px]
h-[600px]
bg-blue-600/20
rounded-full
blur-[120px]
"
></div>



<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
relative
text-center
max-w-5xl
px-6
"


>


<h1
className="
text-7xl
font-black
leading-tight
"
>


Protect your Discord
<br/>


<span
className="
bg-gradient-to-r
from-blue-400
via-purple-500
to-pink-500
text-transparent
bg-clip-text
"
>

with N.O.V.A

</span>


</h1>


<p
className="
mt-8
text-xl
text-gray-400
"
>

Enterprise-grade Discord security system.
<br/>

Anti Raid, Anti Nuke, Verification and more.

</p>



<div
className="
flex
justify-center
gap-5
mt-10
"
>


<button
className="
px-8
py-4
rounded-2xl
bg-white
text-black
font-bold
hover:scale-105
transition
"
>

Add to Discord

</button>



<button
className="
px-8
py-4
rounded-2xl
border
border-white/20
font-bold
hover:bg-white/10
transition
"
>

Dashboard

</button>



</div>


</motion.div>


</section>





{/* STATS */}


<section
className="
py-24
max-w-6xl
mx-auto
grid
grid-cols-2
md:grid-cols-4
gap-10
px-6
"
>


<StatCard
number="99.9%"
label="Protection"
/>


<StatCard
number="24/7"
label="Monitoring"
/>


<StatCard
number="0s"
label="Reaction Time"
/>


<StatCard
number="AI"
label="Detection"
/>


</section>






{/* FEATURES */}


<section
className="
py-24
max-w-7xl
mx-auto
px-6
"
>


<SectionTitle

title="Powerful Security"

description="Everything your Discord server needs."

/>



<div
className="
grid
md:grid-cols-3
gap-8
"
>


{
features.map((feature,index)=>(

<FeatureCard
key={index}
{...feature}
/>

))
}


</div>


</section>






{/* PREMIUM */}


<section
className="
py-24
px-6
"
>


<div
className="
max-w-5xl
mx-auto
rounded-3xl
p-12
bg-gradient-to-r
from-blue-600/20
to-purple-600/20
border
border-white/10
text-center
"
>


<h2
className="
text-5xl
font-black
"
>

Unlock N.O.V.A Premium

</h2>


<p
className="
mt-5
text-gray-300
"
>

Advanced protection features for your community.

</p>


<button
className="
mt-8
px-8
py-4
rounded-xl
bg-white
text-black
font-bold
"
>

View Premium

</button>


</div>


</section>





</div>

)

}