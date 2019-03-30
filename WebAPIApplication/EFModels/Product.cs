using System.Collections.Generic;

namespace WebAPIApplication.EFModels
{
    public class Product
    {
        public int Id { get; set; }
        public string BrandName { get; set; }
        public string Code { get; set; }
        public string BrandDescription { get; set; }
        public virtual ICollection<ProductItem> ProductItems { get; set; }
    }
}