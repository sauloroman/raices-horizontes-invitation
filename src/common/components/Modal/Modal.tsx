import React from 'react'
import './_modal.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useModal } from '@/common/hooks/useModal'
import { X } from '@phosphor-icons/react'

interface ModalProps {
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
    const { actions, attributes } = useModal()

    return (
        <AnimatePresence>
            {attributes.isOpen && (
                <motion.div
                    className='modal'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="modal__container"
                        initial={{ scale: 0.92, y: 30, rotateX: 6, opacity: 0 }}
                        animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
                        exit={{ scale: 0.92, y: 30, rotateX: 6, opacity: 0 }}
                        transition={{ type: "spring", damping: 26, stiffness: 340 }}
                    >
                        <header className="modal__header">
                            <h2 className='modal__title'>{attributes.modalTitle}</h2>
                            <button onClick={actions.closeModal} className="modal__close-btn">
                                <X size={30} />
                            </button>
                        </header>
                        <main className="modal__body">
                            {children}
                        </main>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}


