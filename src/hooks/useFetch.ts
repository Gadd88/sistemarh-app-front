import React, { useEffect, useState } from 'react'
import { ListaEmpleados } from '../types/types'

const useFetch = (url:string) => {
    const [empleados, setEmpleados] = useState<ListaEmpleados>([])
    const connectApi = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setEmpleados(data)
    }
    useEffect(() => {
      connectApi()
    }, [])
    return {
        empleados
    }
}

export default useFetch