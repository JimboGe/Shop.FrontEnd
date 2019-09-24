using Microsoft.EntityFrameworkCore.Migrations;

namespace Shop.FrontEnd.Migrations
{
    public partial class Addgenderinproduct : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "tblProducts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Gender",
                table: "tblProducts");
        }
    }
}
