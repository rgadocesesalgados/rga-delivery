import tw from 'tailwind-styled-components'

export const SContainer = tw.div`flex flex-col  items-center gap-9 ${({
	className,
}) => className}`

export const SLabelContainer = tw.label`flex h-16 items-center rounded-2xl shadow-sm px-5 font-semibold text-xl w-full ${({
	className,
}) => className}`

export const SInput = tw.input`w-1/3 outline-none bg-transparent disabled:cursor-not-allowed [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${({
	className,
}) => className}`

export const SSpan = tw.div`ml-auto bg-white peer-disabled:bg-gray-100  ${({
	className,
}) => className}`
