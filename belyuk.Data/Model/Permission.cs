using System;
using System.Collections.Generic;
using Vleko.DAL.Interface;


namespace belyuk.Data.Model 
{
    public partial class Permission : IEntity
    {
        public Permission()
        {
            Rolepermission = new HashSet<Rolepermission>();
        }

        public Guid Id { get; set; }
        public string? Name { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; } = null!;
        public DateTime? UpdateDate { get; set; }
        public DateTime? UpdateBy { get; set; }

        public virtual ICollection<Rolepermission> Rolepermission { get; set; }
    }
}
