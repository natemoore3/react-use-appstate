import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'
import Form from '../components/Form'

export default function StepOne() {
    const history = useHistory()
    const {
        state,
        actions: { setState },
        api
    } = useForm()

    useEffect(() => {
        const fetch = async () => api.get()
        fetch()
    }, [])

    return (
        <Form
            state={state}
            setState={setState}
            step={1}
            next={(e) => {
                e.preventDefault()
                history.push('/finish')
            }}
        />
    )
}
