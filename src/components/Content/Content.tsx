import { useContext } from 'react'
import { PageContext } from '../Pages/PageProvider'

function Content() {
    const { page } = useContext(PageContext)!

    return (
        <>
            {page}
        </>
    )
}

export default Content