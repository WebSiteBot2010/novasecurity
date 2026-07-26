export default function Button({
children,
className=""
}){


return (

<button

className={`
px-6
py-3
rounded-xl
bg-indigo-600
hover:bg-indigo-500
transition
font-bold
${className}
`}

>

{children}

</button>

)

}