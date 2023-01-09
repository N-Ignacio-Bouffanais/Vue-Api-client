import { Clothe } from "../interfaces/clothe.interface"
import axios from "./axios"

export const createClothe = async (clothe: Clothe ) => await axios.post('/clothe', clothe)
