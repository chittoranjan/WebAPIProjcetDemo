using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebAPIApplication.EFModels;

namespace WebAPIApplication.ProjectDataBase
{
    public class ProjectDB:DbContext
    {
        public ProjectDB() : base("DefaultConnection")
        {
            //
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductItem> ProductItems { get; set; }

    }
}