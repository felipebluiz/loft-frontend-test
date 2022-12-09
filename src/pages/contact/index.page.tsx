import React, { useState } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Envelope, Phone, UserCircle } from 'phosphor-react'
import * as yup from 'yup'

import { Header } from '@/components/ui/Header'
import { Heading } from '@/components/ui/Heading'
import { Text } from '@/components/ui/Text'
import { TextField } from '@/components/ui/TextField'
import { SelectionField } from '@/components/ui/SelectionField'
import { Button } from '@/components/ui/Button'
import { SelectType } from '@/global/types'
import * as masks from '@/utils/masks'

import { Container } from './styles'

const reasons = [
  { value: 'question', label: 'Dúvida' },
  { value: 'appointment', label: 'Agenda Visita' },
  { value: 'deal', label: 'Negociação' }
]

type FormValues = {
  name: string
  email: string
  phoneNumber: string
  reason: SelectType
  message: string
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
  reason: yup.object().shape({
    value: yup.string().required('Campo obrigatório'),
    label: yup.string().required('Campo obrigatório')
  }),
  phoneNumber: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^\(11\) 9\d{4}-\d{4}|\((?:1[2-9]|[2-9]\d)\) [5-9]\d{3}-\d{4}$/,
      'Número de celular inválido'
    ),
  message: yup
    .string()
    .required('Campo obrigatório')
    .min(10, 'A mensagem deve conter pelo menos 10 caracteres')
})

const Contact: React.FC = () => {
  const router = useRouter()
  const [formLoading, setFormLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (data: FormValues) => {
    setFormLoading(true)

    setTimeout(() => {
      console.log(data)

      setFormLoading(false)
    }, 2000)
  }

  return (
    <>
      <Head>
        <title>Contato | Loft</title>
      </Head>
      <Header />
      <div className="main-wrapper">
        <Container>
          <div className="page-header">
            <Heading size="lg">Fale Conosco</Heading>
            <Text>
              Ficou com alguma dúvida? <br /> A gente te ajuda a encontrar o lar
              dos sonhos
            </Text>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">
              <Text>
                Nome completo <span className="required">*</span>
              </Text>
              <TextField.Root error={!!errors.name}>
                <TextField.Icon>
                  <UserCircle />
                </TextField.Icon>
                <TextField.Input {...register('name')} type="text" />
              </TextField.Root>
              {errors.name?.message && (
                <Text size="xs" className="error-message">
                  {errors.name.message}
                </Text>
              )}
            </label>
            <label htmlFor="email">
              <Text>
                E-mail <span className="required">*</span>
              </Text>
              <TextField.Root error={!!errors.email}>
                <TextField.Icon>
                  <Envelope />
                </TextField.Icon>
                <TextField.Input {...register('email')} type="email" />
              </TextField.Root>
              {errors.email?.message && (
                <Text size="xs" className="error-message">
                  {errors.email.message}
                </Text>
              )}
            </label>
            <label htmlFor="phoneNumber">
              <Text>
                Número de celular <span className="required">*</span>
              </Text>
              <TextField.Root error={!!errors.phoneNumber}>
                <TextField.Icon>
                  <Phone />
                </TextField.Icon>
                <TextField.Input
                  {...register('phoneNumber', {
                    onChange: masks.phoneMask.onChange
                  })}
                  type="tel"
                />
              </TextField.Root>
              {errors.phoneNumber?.message && (
                <Text size="xs" className="error-message">
                  {errors.phoneNumber.message}
                </Text>
              )}
            </label>
            <label htmlFor="reason">
              <Text>
                Motivo <span className="required">*</span>
              </Text>
              <Controller
                control={control}
                name="reason"
                render={({ field: { ref, value, onChange } }) => (
                  <SelectionField
                    inputRef={ref}
                    error={!!errors.reason}
                    options={reasons}
                    value={reasons.find((c) => c.value === value?.value)}
                    onChange={onChange}
                  />
                )}
              />
              {errors.reason?.value?.message && (
                <Text size="xs" className="error-message">
                  {errors.reason.value?.message}
                </Text>
              )}
            </label>
            <label htmlFor="message">
              <Text>
                Mensagem <span className="required">*</span>
              </Text>
              <textarea
                {...register('message')}
                className={errors.message ? 'is-invalid' : ''}
              />
              {errors.message?.message && (
                <Text size="xs" className="error-message">
                  {errors.message.message}
                </Text>
              )}
            </label>
            <div className="buttons-container">
              <Button
                type="button"
                variant="secundary"
                radius="semiRounded"
                outlined
                onClick={() => router.push('/')}
              >
                Ver Apartamentos
              </Button>
              <Button
                type="submit"
                variant="primary"
                radius="semiRounded"
                disabled={formLoading}
                loading={formLoading}
              >
                Enviar
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24
  }
}

export default Contact
