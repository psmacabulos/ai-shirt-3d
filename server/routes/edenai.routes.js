import express from "express";
import * as dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from edenAi route!" });
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://api.edenai.run/v2/image/generation",
      {
        response_as_dict: true,
        attributes_as_list: false,
        show_base_64: true,
        show_original_response: false,
        num_images: 1,
        providers: "amazon",
        text: prompt,
        resolution: "512x512",
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmFmY2MxZDUtYzA2OC00MzE0LWFmMjItYTYwYmNmOWVhYTUyIiwidHlwZSI6InNhbmRib3hfYXBpX3Rva2VuIn0.wgbJhwg96LsYGpt2zzGf_qFrYm_lon3uSIPj0P-ZXa0`,
        },
      }
    );

    // Extract the image from the Amazon provider response
    const amazonResponse = response.data.amazon;
    console.log(amazonResponse);
    if (amazonResponse && amazonResponse.status === "success") {
      const image = amazonResponse.items[0].image;
      res.status(200).json({ photo: image });
    } else {
      res.status(500).json({ message: "Failed to generate image with Amazon provider" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
});

export default router;
