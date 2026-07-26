export default function GlassCard({
children,
className=""
}){


return (

<div className={`
rounded-3xl
bg-white/5
border
border-white/10
backdrop-blur-xl
${className}
`}>

{children}

</div>

)

}