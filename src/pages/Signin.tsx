import { EnvelopeSimple, Lock } from 'phosphor-react'
import { Button } from '../components/Button/Button'
import { Checkbox } from '../components/Checkbox/Checkbox'
import { Heading } from '../components/Heading/Heading'
import { Text } from '../components/Text/Text'
import { TextInput } from '../components/TextInput/TextInput'
import { Logo } from '../Logo'

export function SignIn() {
    return (
        <div className="w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size='lg' className="mt-4">Ignite Lab</Heading>

                <Text className="text-gray-400 mt-1" size="lg">
                Faça login e comece a usar
                </Text>
            </header>

            <form className="flex flex-col gap-4 mt-10 w-full max-w-sm items-stretch">
                <label className="flex flex-col gap-3" htmlFor="email">
                <Text className="font-semibold">Endereço de e-mail</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                    <EnvelopeSimple />
                    </TextInput.Icon>
                    <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail">

                    </TextInput.Input>
                </TextInput.Root>
                </label>

                <label className="flex flex-col gap-3" htmlFor="password">
                <Text className="font-semibold">Sua senha</Text>
                <TextInput.Root>
                    <TextInput.Icon>
                    <Lock />
                    </TextInput.Icon>
                    <TextInput.Input type="password" id="password" placeholder="******">

                    </TextInput.Input>
                </TextInput.Root>
                </label>

                <label htmlFor='remember' className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Text size="sm" className="text-gray-200"> Lembrar de mim por 30 dias</Text>
                </label>

                <Button type="submit" className="mt-4">Entrar na plataforma</Button>
            </form>

            <footer className='flex flex-col items-center gap-4 mt-8'>
                <Text asChild size='sm'>
                <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
                </Text>

                <Text asChild size='sm'>
                <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
                </Text>
            </footer>
            </div>
    )
}