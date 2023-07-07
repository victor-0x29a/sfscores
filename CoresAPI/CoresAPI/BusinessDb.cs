using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CoresAPI
{
    public class BusinessDb : DbContext
    {
        public BusinessDb(DbContextOptions<BusinessDb> opt) : base(opt) { }

        public DbSet<Business> businesses => Set<Business>();

    }
}
