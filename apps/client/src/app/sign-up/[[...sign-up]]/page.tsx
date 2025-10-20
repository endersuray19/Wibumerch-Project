import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='justify-center flex items-center mt-10'>
      <SignUp />
    </div>
  )
}