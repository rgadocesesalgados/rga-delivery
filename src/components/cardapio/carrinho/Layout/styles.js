import tw from 'tailwind-styled-components'

export const SContainer = tw.div`flex flex-col h-screen justify-between lg:h-auto  xl:w-7/12 w-10/12 m-auto  animate-fade-left animate-once animate-duration-[900ms] animate-ease-in-out`

export const SHmin = tw.div`h-full bg-black ${({ className }) => className}`
