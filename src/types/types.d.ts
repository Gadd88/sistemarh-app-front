export interface Empleado {
    idEmpleado?: number
    nombre: string
    departamento: string
    sueldo: number
}
export interface INewEmpleado {
    nombre: string
    departamento: string
    sueldo: number
}

export type ListaEmpleados = Empleado[]
export type EmpId = Pick<Empleado, 'idEmpleado'>
export type EmpNombre = Pick<Empleado, 'nombre'>
export type EmpDep = Pick<Empleado, 'departamento'>
export type EmpSueldo = Pick<Empleado, 'sueldo'>
