using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.FrontEnd.Migrations
{
    public partial class AddBrand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BrandId",
                table: "tblProducts",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "tblBrand",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblBrand", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblProducts_BrandId",
                table: "tblProducts",
                column: "BrandId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblProducts_tblBrand_BrandId",
                table: "tblProducts",
                column: "BrandId",
                principalTable: "tblBrand",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblProducts_tblBrand_BrandId",
                table: "tblProducts");

            migrationBuilder.DropTable(
                name: "tblBrand");

            migrationBuilder.DropIndex(
                name: "IX_tblProducts_BrandId",
                table: "tblProducts");

            migrationBuilder.DropColumn(
                name: "BrandId",
                table: "tblProducts");
        }
    }
}
