using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Shop.FrontEnd.DAL.Entites;
using Shop.FrontEnd.Helpers;
using Shop.FrontEnd.ViewModels;

namespace Shop.FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/Account")]
    public class AccountController : ControllerBase
    {
        readonly UserManager<DbUser> _userManager;
        readonly SignInManager<DbUser> _signInManager;
        public AccountController(UserManager<DbUser> userManager, SignInManager<DbUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost ("register")]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                var errrors = CustomValidator.GetErrorsByModel(ModelState);
                return BadRequest(errrors);
            }
            var user = new DbUser
            {
                UserName = credentials.Email,
                Email = credentials.Email,
                PhoneNumber = credentials.PhoneNumber,
                City = credentials.City,
                Region = credentials.Region,
                NumberDelivery = credentials.NumberDelivery,
                FirstName = credentials.FirstName,
                LastName = credentials.LastName
            };

            var result = await _userManager.CreateAsync(user, credentials.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            await _signInManager.SignInAsync(user, isPersistent: false);

            return Ok(CreateToken(user));
        }

        string CreateToken(DbUser user)
        {
            var claims = new Claim[]
            {
                new Claim("id", user.Id),
                new Claim("name", user.UserName)
            };

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is the secret phrase"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(signingCredentials: signingCredentials, claims: claims);
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
