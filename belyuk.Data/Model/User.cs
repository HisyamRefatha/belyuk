using System;
using System.Collections.Generic;
using Vleko.DAL.Interface;


namespace belyuk.Data.Model 
{
    public partial class User : IEntity
    {
        public Guid Id { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;
        public Guid IdRole { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }

        public virtual Role IdRoleNavigation { get; set; } = null!;
    }
}
