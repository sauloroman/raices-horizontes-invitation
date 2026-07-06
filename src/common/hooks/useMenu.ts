import type { RootState } from "@/store"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu, openMenu } from "@/store/ui/menu.slice"

export const useMenu = () => {

    const dispatch = useDispatch()
    const { isOpen } = useSelector((state: RootState) => state.menu)

    const handleOpenMenu = () => dispatch(openMenu())
    const handleCloseMenu = () => dispatch(closeMenu())

    return { isOpen, handleOpenMenu, handleCloseMenu }
}