export default function SectionTitle({
title,
description
}){


return (

<div
className="
text-center
mb-16
"
>


<h2
className="
text-5xl
font-black
"
>

{title}

</h2>


<p
className="
mt-4
text-gray-400
text-lg
"
>

{description}

</p>


</div>

)

}