using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Shop.FrontEnd.DAL.Entites
{
    public class EFDbContext : IdentityDbContext<DbUser>
    {
        public EFDbContext(DbContextOptions<EFDbContext> options)
            : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<InCategory> CategoriesMenu { get; set; }
    }
}
