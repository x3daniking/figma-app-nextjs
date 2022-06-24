import React from 'react'
import { useRouter } from 'next/router'
import { useState, createContext } from 'react'

export const logContext = createContext()
const LogContextProvider = (props) => {
    const [state, setState] = useState(false)

    const router = useRouter()
    function link() {
        if (state) {
            router.reload('/')  
        }
        else {
            router.push('/login')
        }
    }

    function onChange(e){
        setState(e.currentTarget.checked)
    }

    const value = { state, link, onChange }

    return (
        <logContext.Provider value={value}>
            {props.children}
        </logContext.Provider>
    )
}

export default LogContextProvider