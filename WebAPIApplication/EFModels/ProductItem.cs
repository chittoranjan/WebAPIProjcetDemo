namespace WebAPIApplication.EFModels
{
    public class ProductItem
    {
        public int Id { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public double ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}