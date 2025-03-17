

const HeaderLine = ({title} : {title : string}) => {
    return (
        <div className="flex flex-row items-center gap-3 mb-12">
            <div className="w-2 h-12 2xl:w-3 2xl:h-14 bg-accent" />
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-800 dark:text-white">
                {title}
            </h2>
        </div>
    )
}

export default HeaderLine