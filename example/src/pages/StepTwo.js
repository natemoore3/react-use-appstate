import React from 'react'
import useForm from '../hooks/useForm'
import Form from '../components/Form'

export default function StepTwo() {
    const {
        state,
        actions: { setState }
    } = useForm()

    return <Form state={state} setState={setState} step={2} />
}
