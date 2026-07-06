import { useNavigate } from "react-router-dom"

export const useNavigation = () => {
    const navigate = useNavigate()

    const navigateTo = (path: string) => {
        navigate(path)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
        navigateTo
    }
}