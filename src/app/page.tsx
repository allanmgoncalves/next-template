import { SignInForm } from '@/components/auth/sign-in-form'
import { ThemeToggle } from '@/components/theme/theme-toggle'
// import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 p-6">
      <ThemeToggle />

      <SignInForm />
    </main>
  )
}
