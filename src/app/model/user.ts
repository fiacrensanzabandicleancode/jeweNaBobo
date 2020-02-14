import { PayedDebt } from './payed-debt';

export class User {

    name: string
    password: string
    debt: number
    interest: number
    payedDebtAmount: number
    payedDebtHistory: PayedDebt[]

    constructor() {
    }
}