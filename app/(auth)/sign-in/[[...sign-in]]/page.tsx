import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Layout from '../../Layout'

const SignInPage = () => {
  return (
    <Layout>
        <SignIn />
    </Layout>
  )
}

export default SignInPage