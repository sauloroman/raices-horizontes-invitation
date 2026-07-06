import { useState } from "react"
import { useDispatch } from "react-redux"
import { playMusic } from "@/store/ui/music.slice"

interface Props {
    navigateTo: (path: string) => void
}

export const useEnvelope = ({ navigateTo }: Props) => {
    const dispatch = useDispatch()
    const [isOpening, setIsOpening] = useState(false)

    const handleOpen = () => {
        if (isOpening) return
        setIsOpening(true)
        dispatch(playMusic())

        setTimeout(() => {
            navigateTo('/')
        }, 2500)
    }

    const handleSkip = () => {
        dispatch(playMusic())
        navigateTo('/')
    }

    return {
        isOpening,

        handleOpen,
        handleSkip
    }
}