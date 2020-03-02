
import { shallowMount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

const factory = (values = {}) => {
    return shallowMount(HelloWorld, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('Foo', () => {
    it('Componente é uma instância do vue', () => {
        const wrapper = factory()
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('exibe uma mensagem de boas vindas', () => {
        const wrapper = factory()

        expect(wrapper.find('.message').text()).toEqual("Bem-vindo ao livro de receitas do Vue.js")
    })

    it('exibe um erro quando o nome de usuário tem menos de 7 caracteres', () => {
        const wrapper = factory({ username: '' })

        expect(wrapper.find('.error').exists()).toBeTruthy()
    })

    it('exibe um erro quando o nome de usuário é espaço em branco', () => {
        const wrapper = factory({ username: ' '.repeat(7) })

        expect(wrapper.find('.error').exists()).toBeTruthy()
    })

    it('não exibe um erro quando o nome de usuário tem 7 caracteres ou mais', () => {
        const wrapper = factory({ username: 'Lachlan' })

        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})