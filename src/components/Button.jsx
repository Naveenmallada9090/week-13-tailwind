
export const Button = ({
    disabled,
    children,
    onClick,
    variant
}) => {

    return <span onClick={onClick} className={`rounded-2xl text-4xl px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-700" : "bg-green-400"}`}>
         {children}
    </span>
}