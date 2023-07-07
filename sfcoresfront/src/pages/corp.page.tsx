import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { URI } from '../data/backend.data'
import { Business } from '../types/business.type'
import NotComponent from '../components/not.component'
import CorpComponent from '../components/corp.component'
import LoadingComponent from '../components/loading.component'

const CorpPage = () => {
    const [error, setError] = React.useState<boolean>(true);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [business, setBusiness] = React.useState<Business>();

    const { id } = useParams();

    const getData = async () =>  {
        
        try {
            if (!id || isNaN(Number(id))) {
                setError(true)
                return;
            }
            await axios.get(`${URI}/business/${id}`, {
                headers: {
                    "Accept": "application/json"
                }
            }).then(({data})=> {
                const corp = data as Business[];
                setBusiness(corp[0]);
                setError(false)
                setLoading(false)
            }).catch((err)=>{
                setLoading(false)
                setError(true)
            })
        } catch(e) {
            setLoading(false)
            setError(true)
        }
    
}

    React.useEffect(()=> {
        const start = async () => {
            await getData()
        }
        start().catch((e)=>{
            //
        })
    }, [])
    return <>
        {loading ? <LoadingComponent/> : (
            error ? <NotComponent/> : <CorpComponent business={business!}/>
        )}
    </>
}

export default CorpPage;