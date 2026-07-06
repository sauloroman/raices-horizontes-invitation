import React from 'react'
import { useForm } from 'react-hook-form'

import bg from '@/assets/images/bg-search.png'
import { ScrollReveal } from '@/common/components/ScrollReveal/ScrollReveal'
import { useTicket } from '@/modules/ticket/hooks/useTicket'

import './_search.scss'
import { GraduationCapIcon, TicketIcon } from '@phosphor-icons/react'

interface TicketSearch {
    keyPass: string
}

export const Search: React.FC = () => {

    const { onGetTicket, isLoading } = useTicket()

    const { register, handleSubmit, formState: { errors } } = useForm<TicketSearch>({ defaultValues: { keyPass: '' } })

    return (
        <section className='search'>
            <div className="search__overlay" style={{ backgroundImage: `url(${bg})` }}></div>
            <div className="search__container">
                <div className="search__content">
                    <ScrollReveal direction="down" distance={20} duration={0.8} delay={0.1}>
                        <div className='search__logo-box'>
                            <div className='search__logo'>
                                <GraduationCapIcon />
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={24} duration={0.9} delay={0.2}>
                        <div className="search__hero">
                            <p className="search__hero-eyebrow">✦ Raíces y Horizontes ✦</p>
                            <h1 className="search__hero-title">El mundo es tuyo para explorarlo</h1>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" distance={20} duration={0.9} delay={0.35}>
                        <form onSubmit={handleSubmit(data => onGetTicket(data.keyPass))} className='search__form'>
                            <div className='search__input-container'>
                                <label className='search__input-label' htmlFor="keyPass">Ingresa tu clave de acceso</label>
                                <input
                                    {...register('keyPass', {
                                        required: 'La clave de acceso es requerida',
                                        minLength: { value: 4, message: 'La clave de acceso debe tener al menos 4 caracteres' },
                                    })}
                                    className='search__input' id='keyPass' type="text" placeholder='Ej. 1234' />
                                <span className='search__input-error'>{errors.keyPass?.message}</span>
                            </div>
                            <button disabled={isLoading} className='search__button'>
                                <TicketIcon />
                                {isLoading ? 'Buscando...' : 'Buscar'}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
