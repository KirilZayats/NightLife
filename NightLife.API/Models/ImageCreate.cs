namespace NightLife.API.Models
{
    public class ImageCreate
    {
        public string Name { get; set; } = string.Empty;
        public byte[] Files { get; set; }
    }
}
