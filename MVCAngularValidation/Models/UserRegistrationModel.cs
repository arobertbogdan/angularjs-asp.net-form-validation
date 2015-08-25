using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCAngularValidation.Models
{
    public class UserRegistrationModel
    {
        [Required(ErrorMessage = "Username is required")]
        [StringLength(10, ErrorMessage = "Username should have between 5 and 10 characters", MinimumLength = 5)]
        public string Username { get; set; }


        [Required(ErrorMessage = "Password is required")]
        [MinLength(6,ErrorMessage = "Password must have atleast 6 characters")]
        public string Password { get; set; }


        [Required(ErrorMessage = "ConfirmPassword is required")]
        [Compare("Password", ErrorMessage = "Password must match!")]
        public string ConfirmPassword { get; set; }


        [Required(ErrorMessage = "Email is required")]
        [RegularExpression(@"^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$", ErrorMessage = "Email adress is not valid")]
        public string Email { get; set; }

    }
}
