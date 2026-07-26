export default function FeatureCard({
    icon,
    title,
    description
}){


return (

<div className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
hover:border-indigo-500
transition
">


<div className="
w-14
h-14
rounded-2xl
bg-indigo-600/20
flex
items-center
justify-center
text-indigo-400
text-2xl
">

{icon}

</div>


<h3 className="
text-2xl
font-bold
mt-6
">

{title}

</h3>


<p className="
text-gray-400
mt-3
">

{description}

</p>


</div>

)

}