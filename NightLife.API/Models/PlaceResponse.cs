namespace NightLife.API.Models
{
    public class PlaceResponse
    {
        public string Info { get; set; } = string.Empty;
        public string Sub { get; set; } = string.Empty;
        public double Raiting { get; set; }
        public string Coords { get; set; } = "0 0";
    }
}
