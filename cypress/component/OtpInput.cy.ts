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

  it('exposes a numeric keypad without using type=number', () => {
    // type=number ignores maxlength and reports an empty value for input it
    // considers invalid, which made entry unreliable on mobile keyboards.
    cy.mount(OtpInput, {
      props: {
        borders: 'btlr',
        inputsCount: 6
      }
    })

    cy.get('input').each(($el) => {
      expect($el.attr('type')).to.equal('text')
      expect($el.attr('inputmode')).to.equal('numeric')
    })
  })

  it('advances to the next field and leaves it immediately typeable', () => {
    // Regression: every field past the first used to render `readonly` until its
    // predecessor was filled. Desktop browsers focus a readonly input happily, but
    // mobile ones (iOS Safari) refuse to open the software keyboard for it, so
    // entry silently stopped advancing after the first digit.
    cy.mount(OtpInput, {
      props: {
        borders: 'btlr',
        inputsCount: 6
      }
    })

    cy.get('input').eq(0).type('1')
    cy.get('input').eq(1).should('be.focused').and('not.have.attr', 'readonly')

    // The real assertion: whatever now holds focus must accept a keystroke.
    cy.focused().type('2')
    cy.get('input').eq(1).should('have.value', '2')
    cy.get('input').eq(2).should('be.focused')
  })

  it('still forces entry back to the first empty field', () => {
    // `readonly` used to block out-of-order entry; onFocus is now the only thing
    // enforcing it, so make sure the cascade back to the first gap still happens.
    cy.mount(OtpInput, {
      props: {
        borders: 'btlr',
        inputsCount: 6
      }
    })

    cy.get('input').eq(4).focus()
    cy.get('input').eq(0).should('be.focused')
  })

  it('spreads a pasted or auto-filled code across the fields', () => {
    // Guards the removal of maxlength=1: iOS drops the whole SMS code into the
    // focused field, and it has to fan out instead of being truncated.
    cy.mount(OtpInput, {
      props: {
        borders: 'btlr',
        inputsCount: 6
      }
    })

    cy.get('input').eq(0).invoke('val', '123456').trigger('input')

    cy.get('input').eq(0).should('have.value', '1')
    cy.get('input').eq(3).should('have.value', '4')
    cy.get('input').eq(5).should('have.value', '6')
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
