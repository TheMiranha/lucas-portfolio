const NotFound = () => {
    return (
        
<div className="bg-gray-900 relative overflow-hidden h-screen">
    <img src="https://www.tailwind-kit.com/images/landscape/8.svg" className="absolute h-full w-full object-cover"/>
    <div className="inset-0 bg-black opacity-25 absolute">
    </div>
    <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                Você está sozinho(a) aqui.
            </h1>
            <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
                404
            </p>
        </div>
    </div>
</div>

    )
}

export default NotFound;