namespace WebAPIApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ProductAndProductItemModelAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ProductItems",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ProductName = c.String(),
                        ProductCode = c.String(),
                        ProductPrice = c.Double(nullable: false),
                        ProductDescription = c.String(),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Products", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BrandName = c.String(),
                        Code = c.String(),
                        BrandDescription = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductItems", "ProductId", "dbo.Products");
            DropIndex("dbo.ProductItems", new[] { "ProductId" });
            DropTable("dbo.Products");
            DropTable("dbo.ProductItems");
        }
    }
}
