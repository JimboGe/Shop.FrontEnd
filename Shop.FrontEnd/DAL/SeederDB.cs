using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Shop.FrontEnd.DAL.Entites;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.FrontEnd.DAL
{
    public class SeederDB
    {
        public static void SeedAdmin(UserManager<DbUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            var email = "admin@gmail.com";
            var roleName = "Admin";
            var password = "Qwerty1-";
            var count = userManager.Users.Count();
           
                var user = new DbUser
                {
                    Email = email,
                    UserName = email
                };
                var result = userManager.CreateAsync(user, password).Result;

                var roleresult = roleManager.CreateAsync(new IdentityRole
                {
                    Name = roleName
                }).Result;

                result = userManager.AddToRoleAsync(user, roleName).Result;
        }
        public static void SeedDataByAS(IServiceProvider services)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<DbUser>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                SeederDB.SeedAdmin(manager, managerRole);
            }
        }
    }
}
