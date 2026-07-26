import { motion } from "framer-motion";


export default function FeatureCard({
    icon,
    title,
    description
}) {


return (

<motion.div

whileHover={{
    y:-8
}}

transition={{
    duration:.2
}}

className="
p-8
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
hover:border-blue-500/40
transition
"

>


<div
className="
text-4xl
mb-5
"
>

{icon}

</div>


<h3
className="
text-xl
font-bold
"
>

{title}

</h3>


<p
className="
mt-3
text-gray-400
leading-relaxed
"
>

{description}

</p>


</motion.div>

)

}