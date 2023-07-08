import React from 'react'
import axios from 'axios'
import { BusinessType } from '../types/business.type'
import { URI } from '../data/backend.data'
import ContainerComponent from '../components/container.component'
import SearchComponent from '../components/search.component'

const HomePage = () => {

    const [data, setData] = React.useState<BusinessType[]>([])
    const [search, setSearch] = React.useState<boolean>(false)

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

    async function searchData(query: string) {
        if (query.length >= 1) {
            setSearch(true)
            await axios.get(`${URI}/business?corp=${query}`, {
                headers: {
                    "Accept": "application/json"
                }
            }).then(({data})=> {
                const businessList = data as BusinessType[];
                setData([])
                setData(businessList);
            }).catch((err)=>{
                setData([]);
            })
        } else {
            setSearch(false)
        }
        return 0;
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
        <SearchComponent setSearcher={searchData}/>
        {search ? <ContainerComponent business={data} search={true}/> : <ContainerComponent business={data} search={false}/>}
    </>
}

export default HomePage