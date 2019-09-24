using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.FrontEnd.DAL.Entites
{
    [Table("tblUsers")]
    public class DbUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public int NumberDelivery { get; set; }
    }
}
