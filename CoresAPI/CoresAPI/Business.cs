using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CoresAPI
{
    public class Business
    {
        [Key]
        public int business_id { get; set; }
        
        public string? name { get; set; }
        
        public string? address { get; set; }
        
        public string? city { get; set; }
        
        public string? postal_code { get; set; }
        
        public float? latitude { get; set; }
        
        public float? longitude { get; set; }
        
        public long? phone_number { get; set; }
        
        public string? TaxCode { get; set; }
        
        public int? business_certificate { get; set; }
        
        public string? application_date { get; set; }
        
        public string? owner_name { get; set; }
        
        public string? owner_address { get; set; }
        
        public string? owner_city { get; set; }
        
        public string? owner_state { get; set; }
        
        public string? owner_zip { get; set; }


    }
}
