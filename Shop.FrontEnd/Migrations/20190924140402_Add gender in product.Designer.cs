﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Shop.FrontEnd.DAL.Entites;

namespace Shop.FrontEnd.Migrations
{
    [DbContext(typeof(EFDbContext))]
    [Migration("20190924140402_Add gender in product")]
    partial class Addgenderinproduct
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.11-servicing-32099")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("tblBrand");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("tblCategories");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.InCategory", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("CategoryId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("tblInCategories");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("BrandId");

                    b.Property<int?>("CategoryId");

                    b.Property<string>("Color");

                    b.Property<string>("Count");

                    b.Property<string>("Description");

                    b.Property<string>("Gender");

                    b.Property<string>("Name");

                    b.Property<decimal>("Price");

                    b.Property<string>("Size");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.HasIndex("CategoryId");

                    b.ToTable("tblProducts");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.ProductImage", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Path");

                    b.Property<int?>("ProductId");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.ToTable("tblProductImages");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.InCategory", b =>
                {
                    b.HasOne("Shop.FrontEnd.DAL.Entites.Category", "Category")
                        .WithMany("InCategories")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.Product", b =>
                {
                    b.HasOne("Shop.FrontEnd.DAL.Entites.Brand", "Brand")
                        .WithMany("Products")
                        .HasForeignKey("BrandId");

                    b.HasOne("Shop.FrontEnd.DAL.Entites.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("Shop.FrontEnd.DAL.Entites.ProductImage", b =>
                {
                    b.HasOne("Shop.FrontEnd.DAL.Entites.Product", "Product")
                        .WithMany("Images")
                        .HasForeignKey("ProductId");
                });
#pragma warning restore 612, 618
        }
    }
}
