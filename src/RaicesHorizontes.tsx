import React from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'sonner'

import { RouterApp } from './router/RouterApp'
import { store } from './store'
import { ModalMaster } from './common/components/Modal/ModalMaster'

export const RaicesHorizontes: React.FC = () => {
    return (
        <Provider store={store}>
            <RouterApp />
            <Toaster position='top-center' closeButton />
            <ModalMaster />
        </Provider>
    )
}
