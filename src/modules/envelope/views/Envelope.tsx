import React from 'react'

import { EnvelopeBase, EnvelopeMedia } from '..'

import sealImage from '@/assets/images/sello.png'
import { useNavigation } from '@/common/hooks/useNavigate'
import { useEnvelope } from '@/modules/envelope/hooks/useEnvelope'

export const Envelope: React.FC = () => {
    const { navigateTo } = useNavigation();
    const { isOpening, handleOpen, handleSkip } = useEnvelope({ navigateTo })

    return (
        <EnvelopeBase
            isOpening={isOpening}
            onOpen={handleOpen}
            sealImage={sealImage}
            onSkip={handleSkip}
            showSkip={false}
        >
            <EnvelopeMedia />
        </EnvelopeBase>
    )
}
