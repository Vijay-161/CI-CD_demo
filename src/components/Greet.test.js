import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Breet component', () => {

    test('renders correctly', ()=>{
        render(<Greet />)
        // const h1Elem = screen.getByRole('heading', {
        //     level: 1
        // })
        const h1Elem = screen.getByRole('heading', {
            name: "Hello"
        })
        expect(h1Elem).toBeInTheDocument()
    })
    
    test('renders with props', ()=>{
        render(<Greet name={"Vijay"}/>)
    
        const h1Elem1 = screen.getByText(/Vijay/i)
        expect(h1Elem1).toBeInTheDocument()
    })
  
})
