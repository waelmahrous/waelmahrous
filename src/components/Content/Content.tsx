import React, { useContext } from 'react'
import { PageContext } from '../Pages/PageProvider'

type Props = {}

function Content({ }: Props) {
    const { page } = useContext(PageContext)!
    return (
        <>
        { page }</>
    )
}

export default Content