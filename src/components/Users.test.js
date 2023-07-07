import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import { server } from "../mocks/server"
import Users from "./Users"

describe('Users',()=>{
    test('should render correctly',()=>{
        render(<Users />)
        const h1Elem = screen.getByRole('heading', {level:1})
        expect(h1Elem).toBeInTheDocument()
    })
    test('should show a list of users',async()=>{
        render(<Users />)
        const userList = await screen.findAllByRole('listitem')
        expect(userList).toHaveLength(3)
    })
    // test('should show error', async() =>{
    //     server.use(
    //         rest.get('https://jsonplaceholder.typicode.com/users',(req,res,ctx)=>{
    //             return res(ctx.status(500))
    //         })
    //     )
    //     render(<Users />)
    //     const errElem = await screen.findByText('Error fetched')
    //     expect(errElem).toBeInTheDocument()
    // })
    test('should call handle Delete', async()=>{
        mockDelete = jest.fn()
        render(<Users handleDelete={mockDelete}/>)
        const btnItem = await screen.findAllByRole('button', {
            name: 'delete'
        })
        userEvent.click(btnItem[0])
        expect(handleDelete).toHaveBeenCalled()
    })
})
//use mock service worker (msw)
//npm install msw --save-dev