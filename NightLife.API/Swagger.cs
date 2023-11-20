using Microsoft.OpenApi.Models;

namespace NightLife.API
{
    public static class Swagger
    {
        public static void AddSwagger(this IServiceCollection services, IConfiguration config)
        {

            services.AddSwaggerGen(c =>
            {
                c.AddServer(new OpenApiServer() { Url = $"" });

                c.OrderActionsBy((apiDesc) => $"{apiDesc.ActionDescriptor.RouteValues["controller"]}_{HttpMethods(apiDesc.HttpMethod)}");
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "NightLife API",
                    Description = "Проект API для NightLife",
                });

            });

        }

        public static void UseSwaggerCustom(this IApplicationBuilder app)
        {
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("./swagger/v1/swagger.json", "NightLife API");
                c.DefaultModelsExpandDepth(-1);
                c.RoutePrefix = string.Empty;
                c.EnableValidator();
            });

        }

        private static string HttpMethods(string name)
        {
            if (name.ToUpper() == "GET")
                return "a";
            if (name.ToUpper() == "POST")
                return "b";
            if (name.ToUpper() == "PUT")
                return "c";
            if (name.ToUpper() == "PATCH")
                return "d";
            if (name.ToUpper() == "DELETE")
                return "e";
            return "f";
        }
    }

}
