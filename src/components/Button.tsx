import React from 'react'

type buttonProps = {
    type: "button" | "submit"
    label: String,
    color: "Yellow" | "Blue" | 'Outline',
    icon?: string
    onClick?: () => void
}

const Button = ({
    type,
    label,
    color,
    icon,
    onClick
}: buttonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${
                color === "Yellow" ? 'bg-[#F2B124] destkop-md font-medium text-white' 
                : color === "Blue" ? 'bg-[#1E386B] destkop-sm font-semibold text-white' 
                : color === "Outline" ? 'border-solid border-[1px] border-[#BBC9E8] destkop-sm font-semibold' : ''
            } px-6 py-4 rounded`}
        >
            {label}
        </button>
    )
}

export default Button