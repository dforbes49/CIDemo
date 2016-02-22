using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CIDemo.Startup))]
namespace CIDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
