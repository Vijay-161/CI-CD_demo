import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe('Skills', ()=>{
    const skills = [
        {id:1, name: "vijay"},
        {id:2, name: "writing"},
        {id:3, name: "reading"}
    ]
    test('renders correctly', ()=>{
        const view = render(<Skills skills={skills} />)
        // logRoles(view)
        const h2Elem = screen.getByRole('heading', {
            level: 2
        })
        expect(h2Elem).toBeInTheDocument()
        const listElem = screen.getByRole('list')
        expect(listElem).toBeInTheDocument()
    })

    test('renders the list of skills in proper ordder', ()=>{
        render(<Skills skills={skills}/>)
        const itemElm = screen.getAllByRole('listitem')
        expect(itemElm).toHaveLength(3)
        expect(itemElm[0]).toHaveTextContent(/vijay/i)
    })

    test('should show loggin button', ()=>{
        render(<Skills skills={skills} />)
        const loginBtn = screen.getByRole('button', {
            name: 'login'
        })
        expect(loginBtn).toBeInTheDocument()
    })

    test('should not show start working ', ()=>{
        render(<Skills skills={skills} />)
        const startBtn = screen.queryByRole('button',{
            name: 'start working'
        })
        expect(startBtn).not.toBeInTheDocument()
    })

    test('should show start working later', async()=>{
        render(<Skills skills={skills} />)
        const startBtn = await screen.findByRole('button',{
            name: 'start working'
        }, {timeout: 1000})
        expect(startBtn).toBeInTheDocument()
    })
    
})
