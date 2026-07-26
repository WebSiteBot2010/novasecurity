export default function SectionTitle({
    title,
    description
}){

return (

<div
className="
text-center
mb-12
"
>

<h2
className="
text-4xl
md:text-5xl
font-black
tracking-tight
"
>

{title}

</h2>


{
description &&

<p
className="
mt-4
text-gray-400
max-w-2xl
mx-auto
"
>

{description}

</p>

}


</div>

)

}