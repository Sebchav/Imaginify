import { SignUp } from '@clerk/nextjs'
import React from 'react'
import Layout from '../../Layout'

const SignUpPage = () => {
  return (
    <Layout>
        <SignUp />
    </Layout>
  )
}

export default SignUpPage