import React from 'react'
import axios from 'axios'
import { BusinessType } from '../types/business.type'
import { URI } from '../data/backend.data'
import ContainerComponent from '../components/container.component'

const HomePage = () => {

    const [data, setData] = React.useState<BusinessType[]>([])

    async function getData() {
        if (data.length < 1) {
            await axios.get(`${URI}/business`, {
                headers: {
                    "Accept": "application/json"
                }
            }).then(({data})=> {
                const businessList = data as BusinessType[];
                setData(businessList);
            }).catch((err)=>{
                setData([]);
            })
        } 
    }
    React.useEffect(() => {
        const start = async () => {
            await getData();
        }
        start().catch((e)=>{
            //
        })
    }, [])
    return <>
        <ContainerComponent business={data}/>
    </>
}

export default HomePage