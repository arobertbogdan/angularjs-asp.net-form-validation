using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVCAngularValidation.Models
{
    public class TestForm
    {
        [Required(ErrorMessage = "Username is required")]
        [StringLength(10, ErrorMessage = "Username should have between 5 and 10 characters", MinimumLength = 5)]
        public string Username2 { get; set; }


        [Required(ErrorMessage = "Password is required")]
        [MinLength(6, ErrorMessage = "Password must have atleast 6 characters")]
        public string Password2 { get; set; }
    }
}
