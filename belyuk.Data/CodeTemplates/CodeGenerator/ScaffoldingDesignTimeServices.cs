using EntityFrameworkCore.Scaffolding.Handlebars.Internal;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.DependencyInjection;
using System.Diagnostics.CodeAnalysis;

namespace belyuk.Data.CodeTemplates.CodeGenerator
{
    public class ScaffoldingDesignTimeServices : IDesignTimeServices
    {
        [ExcludeFromCodeCoverage]
        public void ConfigureDesignTimeServices(IServiceCollection serviceCollection)
        {
            serviceCollection.AddHandlebarsScaffolding();

            var custom_entity = (helperName: "custom-entity", helperFunction: (Action<HandlebarsDotNet.EncodedTextWriter, HandlebarsDotNet.Context, HandlebarsDotNet.Arguments>)CustomEntity);
            serviceCollection.AddHandlebarsHelpers(custom_entity);

            #pragma warning disable EF1001
            serviceCollection.AddSingleton<ICSharpDbContextGenerator, CodeGenerator>();
            #pragma warning restore EF1001
        }

        void CustomEntity(HandlebarsDotNet.EncodedTextWriter writer, HandlebarsDotNet.Context context, HandlebarsDotNet.Arguments parameters) 
        {
            List<Dictionary<string, object>> properties = (List<Dictionary<string, object>>)context["properties"];
            if (properties != null && properties.Count > 0)
            {
                switch (properties[0]["property-type"])
                {
                    case "int":
                        writer.Write("BaseIntEntity");
                        break;
                    default:
                        writer.Write("IEntity");
                        break;
                }
            }
            else
                writer.Write("IEntity");
        }
    }
}
