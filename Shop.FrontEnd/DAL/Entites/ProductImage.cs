using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.FrontEnd.DAL.Entites
{
    [Table("tblProductImages")]
    public class ProductImage
    {
        [ForeignKey("User"), Key]
        public string Id { get; set; }
        public string Path { get; set; }
        public virtual Product Product { get; set; }
    }
}
