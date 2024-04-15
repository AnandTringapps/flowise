import React, { useEffect, useRef } from 'react'
import Flowise from '../flowise'

function FlowiseComponent() {
    const flowiseInstanceRef = useRef<typeof Flowise | null>(null)

    useEffect(() => {
        flowiseInstanceRef.current = () => Flowise() // No configuration object needed
    }, [])

    if (!flowiseInstanceRef.current) {
        return <div>Loading Flowise...</div>
    }

    return (
        <div>
            <h1>Flowise Integration</h1>
            <button onClick={() => flowiseInstanceRef.current}>Run Flowise Function</button>
        </div>
    )
}

export default FlowiseComponent
