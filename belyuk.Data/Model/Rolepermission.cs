using System;
using System.Collections.Generic;
using Vleko.DAL.Interface;


namespace belyuk.Data.Model 
{
    public partial class Rolepermission : IEntity
    {
        public Guid Id { get; set; }
        public Guid IdRole { get; set; }
        public Guid IdPermission { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; } = null!;
        public DateTime? UpdateDate { get; set; }
        public string? UpdateBy { get; set; }

        public virtual Permission IdPermissionNavigation { get; set; } = null!;
        public virtual Role IdRoleNavigation { get; set; } = null!;
    }
}
