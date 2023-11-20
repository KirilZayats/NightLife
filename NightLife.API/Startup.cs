using NightLife.API.Repositories.Places;
using NightLife.API.Repositories.User;
using NightLife.API.Services.Places;
using NightLife.API.Services.User;
using Npgsql;
using System.Data;
using System.Text;

namespace NightLife.API
{
    public class Startup
    {
        private IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();

            services.AddSwagger(Configuration);

            services.AddTransient<IDbConnection>((provider) => 
                    new NpgsqlConnection(Configuration.GetConnectionString("DatabaseConnectionString")));
            services.AddTransient<IPlacesService, PlacesService>();
            services.AddTransient<IPlacesRepository, PlacesRepository>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserRepository, UserRepository>();

            Dapper.DefaultTypeMap.MatchNamesWithUnderscores = true;
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseStatusCodePages();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseCors(builder => builder.AllowAnyOrigin()
                                          .AllowAnyMethod()
                                          .AllowAnyHeader());



            app.UseSwaggerCustom();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

        }
    }

}
