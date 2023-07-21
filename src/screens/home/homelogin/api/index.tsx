import { Dress } from "../types";
export async function getDresses(): Promise<Dress []> {  
    const response = await fetch('/api/dresses');
    const data = await response.json();
    return data}
