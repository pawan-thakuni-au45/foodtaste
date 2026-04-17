

// import { SignInButton, SignUpButton ,show,button} from '@clerk/nextjs'
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md'>
     <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
    </header>
  )
}

export default Header