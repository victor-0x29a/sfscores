using CoresAPI;
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
app.MapGet("/business", async (BusinessDb db) =>
{

    var data = await db.businesses
    .Select(b => new {
        b.name,
        b.owner_name,
        b.business_id
    })
    .ToListAsync();
    return data;
});

app.MapGet("/business/{business_id}", async (string business_id, BusinessDb db) =>
{
    var data = await db.businesses.Where(c => c.business_id == int.Parse(business_id)).Take(1).ToListAsync();
    return data;
});

app.Run();
