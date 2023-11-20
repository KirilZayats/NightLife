namespace NightLife.API.Models
{
    public class PlaceCreate
    {
        public string Sub { get; set; } = string.Empty;
        public string Info { get; set; } = string.Empty;
        public string Coords { get; set; } = "0 0";
        public double Raiting { get; set; }
        public IFormFileCollection Images { get; set; } = new FormFileCollection();
    }
}
