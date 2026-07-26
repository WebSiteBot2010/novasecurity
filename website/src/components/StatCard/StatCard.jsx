export default function StatCard({
number,
label
}){


return (

<div className="
p-8
rounded-3xl
bg-white/5
border
border-white/10
text-center
">


<h3 className="
text-5xl
font-black
">

{number}

</h3>


<p className="
mt-3
text-gray-400
">

{label}

</p>


</div>

)

}