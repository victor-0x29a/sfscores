using CoresAPI;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<BusinessDb>(opt =>
{
    opt.UseSqlite("Data Source=C:/Users/carto/OneDrive/Documentos/Vite.net/sfscores.sqlite");
});
builder.Services.AddCors(opt => {
    opt.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins().AllowAnyOrigin();
    });
});
var app = builder.Build();
app.UseCors();

app.MapGet("/business", async ([FromQuery()] string? corp, BusinessDb db) =>
{

    try
    {
        if (!string.IsNullOrEmpty(corp)) {
            string Name = corp.ToString();
            var Data = await db.businesses.Where(b => b.name.Contains(Name)).Select(b => new {
                b.name,
                b.owner_name,
                b.business_id
            }).ToListAsync();
            return Results.Ok(Data);
        }
        var data = await db.businesses
        .Select(b => new {
            b.name,
            b.owner_name,
            b.business_id
        })
        .ToListAsync();
        return Results.Ok(data);
    } catch
    {
        return Results.Problem();
    }

});

app.MapGet("/business/{business_id}", async (string business_id, BusinessDb db) =>
{
    try
    {
        int Id;
        bool hasNumber = int.TryParse(business_id, out Id);
        if (!hasNumber) return Results.BadRequest();

        var data = await db.businesses.Where(c => c.business_id == Id).Take(1).ToListAsync();
        return Results.Ok(data);
    } catch
    {
        return Results.Problem();
    }
    
    
});



app.Run();
