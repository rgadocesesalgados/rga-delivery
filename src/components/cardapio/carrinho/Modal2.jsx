import InputCarrinho from './Input'
import * as S from './styles'
import Footer from './Footer'
import { SButton } from '@/components/@ui/Buton'

export default function Modal2({ className, setIsActive }) {
	const enviar = (e) => {
		e.preventDefault()
		setIsActive(3)
	}
	return (
		<S.Form className={`${className}`} onSubmit={enviar}>
			<InputCarrinho label={'Nome completo:'} />
			<div className='flex flex-col gap-5 md:flex-row'>
				<InputCarrinho label={'Endereço/Rua:'} className={'md:w-full'} />
				<InputCarrinho
					label={'Número:'}
					type={'number'}
					typeOf={'numeric'}
					className={'md:w-1/3'}
				/>
			</div>
			<InputCarrinho label={'Bairro:'} />
			<InputCarrinho label={'Cidade:'} />
			<Footer />
			<div className='mt-5 mb-7 flex gap-4 justify-end '>
				<SButton
					className='bg-white'
					onClick={() => setIsActive(1)}
					type={'button'}>
					Voltar
				</SButton>
				<SButton type={'submit'}>Avançar</SButton>
			</div>
		</S.Form>
	)
}
