import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default async function handler(request, response) {
  if (request.method === "DELETE") {
    const { imageUrl } = request.body;
    const publicId = imageUrl
      .replace("https://res.cloudinary.com/", "")
      .replace(".jpg", "")
      .replace(".png", "");

    cloudinary.v2.uploader.destroy(publicId, (error, result) => {
      if (error) {
        response.status(500).json({ message: "Error deleting image" });
      } else {
        response.status(200).json({ message: "Image deleted successfully" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
