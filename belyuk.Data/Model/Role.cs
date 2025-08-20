using System;
using System.Collections.Generic;
using Vleko.DAL.Interface;


namespace belyuk.Data.Model 
{
    public partial class Role : IEntity
    {
        public Role()
        {
            Rolepermission = new HashSet<Rolepermission>();
            User = new HashSet<User>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; } = null!;
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? CreatedBy { get; set; }
        public string? UpdatedBy { get; set; }

        public virtual ICollection<Rolepermission> Rolepermission { get; set; }
        public virtual ICollection<User> User { get; set; }
    }
}
