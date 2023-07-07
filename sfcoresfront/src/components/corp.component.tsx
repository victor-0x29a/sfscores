import React from 'react'
import { CorpComponentProps } from '../types/prop.type';
import { CorpComponentStyled } from '../style/components.style';

const CorpComponent = ({business}: CorpComponentProps) => {

    return <CorpComponentStyled>
        <h2>{business.name ? business.name : "Unknown"}</h2>
        <div>
            <section>
                <strong>Informations of owner</strong>
                <label>
                    <span>
                        Name
                    </span>
                    {business.owner_name ? business.owner_name : "Unknown"}
                </label>
                <label>
                    <span>
                        City
                    </span>
                    {business.owner_city ? business.owner_city : "Unknown"}
                </label>
                <label>
                    <span>
                        State
                    </span>
                    {business.owner_state ? business.owner_state : "Unknown"}
                </label>
                <label>
                    <span>
                        Zip code
                    </span>
                    {business.owner_zip ? business.owner_zip : "Unknown"}
                </label>
                <label>
                    <span>
                        Address
                    </span>
                    {business.owner_address ? business.owner_address : "Unknown"}
                </label>
            </section>
            <section>
                <strong>Informations of enterprise</strong>
                <label>
                    <span>
                        City
                    </span>
                    {business.city ? business.city : "Unknown"}
                </label>
                <label>
                    <span>
                        Tax Code
                    </span>
                    {business.TaxCode ? business.TaxCode : "Unknown"}
                </label>
                <label>
                    <span>
                        Postal code
                    </span>
                    {business.postal_code ? business.postal_code : "Unknown"}
                </label>
                <label>
                    <span>
                        Address
                    </span>
                    {business.address ? business.address : "Unknown"}
                </label>
                <label>
                    <span>
                        Latitude and longitude
                    </span>
                    {business.latitude && business.longitude ? `${business.latitude.toString() + "/" + business.longitude.toString()}` : "Unknown"}
                </label>
                <label>
                    <span>
                        Phone number
                    </span>
                    {business.phone_number ? business.phone_number : "Unknown"}
                </label>
                <label>
                    <span>
                        Application date
                    </span>
                    {business.application_date ? business.application_date : "Unknown"}
                </label>
                <label>
                    <span>
                        Certificate
                    </span>
                    {business.business_certificate ? business.business_certificate : "Unknown"}
                </label>
                <label>
                    <span>
                        Business ID
                    </span>
                    {business.business_id ? business.business_id : "Unknown"}
                </label>
            </section>
        </div>
    </CorpComponentStyled>
}

export default CorpComponent;