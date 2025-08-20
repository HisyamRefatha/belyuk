using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using belyuk.Data.Model;


namespace belyuk.Data
{
    public partial class ApplicationDBContext : DbContext
    {
        public virtual DbSet<Permission> PERMISSION { get; set; } = null!;
        public virtual DbSet<Role> ROLE { get; set; } = null!;
        public virtual DbSet<Rolepermission> ROLEPERMISSION { get; set; } = null!;
        public virtual DbSet<User> USER { get; set; } = null!;

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Permission>(entity =>
            {
                entity.ToTable("PERMISSION");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreateBy)
                    .HasMaxLength(100)
                    .HasColumnName("create_by");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("create_date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.UpdateBy)
                    .HasColumnType("datetime")
                    .HasColumnName("update_by");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("update_date");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("ROLE");

                entity.HasIndex(e => e.Name, "UQ__Role__72E12F1B752E3AAA")
                    .IsUnique();

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(16)
                    .HasColumnName("created_by");

                entity.Property(e => e.Name)
                    .HasMaxLength(100)
                    .HasColumnName("name");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(16)
                    .HasColumnName("updated_by");
            });

            modelBuilder.Entity<Rolepermission>(entity =>
            {
                entity.ToTable("ROLEPERMISSION");

                entity.HasIndex(e => e.IdPermission, "idx_permission_rolePermission");

                entity.HasIndex(e => e.IdRole, "idx_role_permission");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreateBy)
                    .HasMaxLength(100)
                    .HasColumnName("create_by");

                entity.Property(e => e.CreateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("create_date")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdPermission).HasColumnName("id_permission");

                entity.Property(e => e.IdRole).HasColumnName("id_role");

                entity.Property(e => e.UpdateBy)
                    .HasMaxLength(100)
                    .HasColumnName("update_by");

                entity.Property(e => e.UpdateDate)
                    .HasColumnType("datetime")
                    .HasColumnName("update_date");

                entity.HasOne(d => d.IdPermissionNavigation)
                    .WithMany(p => p.Rolepermission)
                    .HasForeignKey(d => d.IdPermission)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Permission_FK_2");

                entity.HasOne(d => d.IdRoleNavigation)
                    .WithMany(p => p.Rolepermission)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("Role_FK_1");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("USER");

                entity.HasIndex(e => e.Username, "UQ__User__F3DBC572DA2082F0")
                    .IsUnique();

                entity.HasIndex(e => e.IdRole, "idx_role_user");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .HasDefaultValueSql("(newid())");

                entity.Property(e => e.CreatedAt)
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(16)
                    .HasColumnName("created_by");

                entity.Property(e => e.IdRole).HasColumnName("id_role");

                entity.Property(e => e.Password)
                    .HasMaxLength(255)
                    .HasColumnName("password");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.UpdatedBy)
                    .HasMaxLength(16)
                    .HasColumnName("updated_by");

                entity.Property(e => e.Username)
                    .HasMaxLength(255)
                    .HasColumnName("username");

                entity.HasOne(d => d.IdRoleNavigation)
                    .WithMany(p => p.User)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("User_FK");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
