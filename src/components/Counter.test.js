import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import Counter from "./Counter"
describe('Counter',()=>{
    test('should render correctly', ()=>{
        render(<Counter />)
        const h1Elem = screen.getByRole('heading',{
            level: 1
        })
        const increaseBtn = screen.getByRole('button',{
            name: 'Increase'
        })
        expect(h1Elem).toBeInTheDocument()
        expect(h1Elem).toHaveTextContent(0)
        expect(increaseBtn).toBeInTheDocument()
    })

    test('should increase the count by 1 on click',async()=>{
        render(<Counter />)
        const h1Elem = screen.getByRole('heading',{
            level: 1
        })
        const increaseBtn = screen.getByRole('button',{
            name: 'Increase'
        })
        await act(()=>userEvent.click(increaseBtn))
        
        expect(h1Elem).toHaveTextContent(1)
    })

    test('should set initial count to be user defined', async()=>{
        render(<Counter />)
        const h1Elem = screen.getByRole('heading',{
            level: 1
        })
        const increaseBtn = screen.getByRole('button',{
            name: 'Increase'
        })
        const setBtn = screen.getByRole('button',{
            name: 'set'
        })
        const inputElem = screen.getByRole('spinbutton')

        await act(()=>userEvent.type(inputElem, '10'))
        await act(()=> userEvent.click(setBtn))
        expect(h1Elem).toHaveTextContent(10)
        await act(()=> userEvent.click(increaseBtn))
        expect(h1Elem).toHaveTextContent(11)
    })

    test('should have the proper focus', ()=>{
        render(<Counter />)
        
        const increaseBtn = screen.getByRole('button',{
            name: 'Increase'
        })
        const setBtn = screen.getByRole('button',{
            name: 'set'
        })
        const inputElem = screen.getByRole('spinbutton')

        userEvent.tab()
        expect(increaseBtn).toHaveFocus()
        userEvent.tab()
        expect(inputElem).toHaveFocus()
        userEvent.tab()
        expect(setBtn).toHaveFocus()
    })


    
})