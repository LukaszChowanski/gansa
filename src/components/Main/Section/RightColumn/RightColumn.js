import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

const Form = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)
  
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>

        <h2>Your Details</h2>
        <p>Let us know how to get back to you.</p>

        <CosTamContainer>
            <InputContainer>
                <label htmlFor="First name">First name <span>*</span></label>
                <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
            </InputContainer>
            <InputContainer>
                <label htmlFor="Last name">Last Name <span>*</span></label>
                <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
            </InputContainer>
            <InputContainer>    
                <label htmlFor="Email">Email Address <span>*</span></label>
                <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
            </InputContainer>
        </CosTamContainer>

        <h2>How can we help?</h2>
        <p>Feel free to ask a question or simply leave a comment. <span>*</span></p>

        <label htmlFor="Message">Comments / Questions *</label>
        <textarea type="text" name="Message"></textarea>

      <input type="submit" name="submit" value="Send Message"/>
    </StyledForm>
  )
}
export default Form

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    text-align: left;
    padding: 30px 10px;
    & h2{
        padding: 10px 0;
    }
    & p {
        padding-bottom: 20px;
    }
    & span {
        color: red;
    }
    & textarea {
        width: 100%;
        height: 150px;
    }
    & label {
        font-weight: bold;
        padding-bottom: 5px;
    }
    & input {
        height: 30px;
        &[value] {
            margin-top: 10px;
            background-color: white;
            cursor:pointer;
            border: 1px solid grey;
            padding: 5px 5px;
        }
    }
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const CosTamContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
`