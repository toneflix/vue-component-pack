import '../../packages/otp-input/src/styles/main.scss'

import { OtpInput } from '../../packages/otp-input'

describe('<OtpInput />', () => {
  it('renders label', () => {
    cy.mount(OtpInput, {
      props: {
        label: 'Enter Otp',
        borders: 'btlr'
      }
    }).then(({ wrapper }) => {
      expect(wrapper.text()).contains('Enter Otp')
    })
  })

  it('renders correct number of inputs', () => {
    cy.mount(OtpInput, {
      props: {
        borders: 'btlr',
        inputsCount: 6
      }
    })

    cy.get('input').should('have.length', 6)
  })

  it('updates v-model', () => {
    cy.mount(OtpInput, {
      props: {
        label: 'Enter Otp',
        borders: 'btlr',
        modelValue: '111111'
      }
    }).then(async ({ wrapper }) => {
      wrapper.props('onUpdate:modelValue')?.((e: string) => wrapper.setProps({ modelValue: e }))

      const inputs = wrapper.findAll('input')
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i]
        await input.setValue(String(1 + i))
      }
      expect(wrapper.emitted('update:modelValue')?.at(5)?.at(0)).to.equal('123456')
    })
  })
})

describe('<OtpInput /> build', () => {
  it('renders', () => {
    const path = '../../packages/otp-input/dist/index.mjs'

    import(/* @vite-ignore */ path)
      .then((e) => {
        cy.mount(e.OtpInput, {
          props: {
            label: 'Enter Otp',
            borders: 'btlr'
          }
        }).then(({ wrapper }) => {
          expect(wrapper.text()).contains('Enter Otp')
        })
      })
      .catch(() => {
        cy.log('No build version of <OtpInput /> was found.')
      })
  })
})
